#!/usr/bin/env python3
"""Browser-level checks for the production V2 portfolio."""

from __future__ import annotations

import os

from playwright.sync_api import Page, sync_playwright


BASE_URL = os.environ.get("SITE_BASE_URL", "http://127.0.0.1:8765").rstrip("/")


def assert_page_health(page: Page) -> None:
    page.wait_for_load_state("networkidle")
    for image in page.locator("img").all():
        image.scroll_into_view_if_needed()
    page.wait_for_function(
        """() => [...document.images].every(image => image.complete)"""
    )
    broken_images = page.locator("img").evaluate_all(
        """images => images
            .filter(image => !image.complete || image.naturalWidth === 0)
            .map(image => image.getAttribute("src"))"""
    )
    assert not broken_images, f"Broken images: {broken_images}"
    assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth")


def run() -> None:
    with sync_playwright() as playwright:
        launch_options: dict[str, object] = {"headless": True}
        executable_path = os.environ.get("PLAYWRIGHT_CHROMIUM_EXECUTABLE")
        if executable_path:
            launch_options["executable_path"] = executable_path

        browser = playwright.chromium.launch(**launch_options)

        desktop = browser.new_context(
            viewport={"width": 1440, "height": 1000},
            locale="en-US",
            color_scheme="dark",
        )
        page = desktop.new_page()
        console_errors: list[str] = []
        failed_requests: list[str] = []
        page.on(
            "console",
            lambda message: console_errors.append(message.text)
            if message.type == "error"
            else None,
        )
        page.on("requestfailed", lambda request: failed_requests.append(request.url))

        page.goto(f"{BASE_URL}/?lang=en")
        assert page.title() == "Miguel Bravo — Data Scientist & AI Engineer"
        assert page.locator("html").get_attribute("lang") == "en"
        assert page.get_by_role("heading", level=1).inner_text().startswith("I build data systems")
        assert page.get_by_role("link", name="Browse all 12 projects").is_visible()
        assert_page_health(page)

        page.locator('[data-language="es"]').click()
        assert page.locator("html").get_attribute("lang") == "es"
        assert page.get_by_role("heading", level=1).inner_text().startswith("Construyo sistemas")

        page.goto(f"{BASE_URL}/projects.html?lang=en")
        assert page.locator(".project-card").count() == 12
        assert page.locator(".case-study").count() == 4
        page.get_by_role("button", name="AI / ML").click()
        assert page.locator(".project-card:visible").count() == 7
        page.get_by_role("button", name="All · 12").click()
        assert page.locator(".project-card:visible").count() == 12
        assert_page_health(page)

        page.goto(f"{BASE_URL}/speaking.html?lang=en")
        assert page.locator(".speaker-card").count() == 4
        assert page.locator(".publication").count() == 4
        assert_page_health(page)

        mobile = browser.new_context(
            viewport={"width": 390, "height": 844},
            locale="es-ES",
            color_scheme="light",
        )
        mobile_page = mobile.new_page()
        mobile_page.goto(f"{BASE_URL}/")
        menu = mobile_page.locator(".menu-button")
        assert menu.is_visible()
        menu.click()
        assert mobile_page.locator("#primary-menu").is_visible()
        assert_page_health(mobile_page)

        assert not console_errors, f"Console errors: {console_errors}"
        assert not failed_requests, f"Failed requests: {failed_requests}"

        mobile.close()
        desktop.close()
        browser.close()

    print("Browser smoke tests passed: desktop, mobile, language, filters, images and console.")


if __name__ == "__main__":
    run()
