const PROJECT_ORDER = [
  "iheatapp",
  "cloudya",
  "flight-delay",
  "california-traffic",
  "diamond",
  "pharmasys",
  "walmart",
  "mental-health",
  "p5-game",
  "campus-map",
  "news-geo",
  "us-crime"
];

const PROJECTS = {
  iheatapp: {
    title: { en: "iHeatApp", es: "iHeatApp" },
    context: { en: "Climate informatics · Professional research", es: "Informática climática · Investigación" },
    year: "2024—26",
    cover: "assets/project-iheatapp-v1.jpg",
    alt: {
      en: "Editorial heat-risk map of Imperial Valley",
      es: "Ilustración de un mapa de riesgo por calor de Imperial Valley"
    },
    lead: {
      en: "A bilingual platform that turns hourly forecasts into understandable heat-risk maps and contextual guidance for agricultural communities in California’s Imperial Valley.",
      es: "Una plataforma bilingüe que convierte previsiones horarias en mapas claros de riesgo por calor y recomendaciones para comunidades agrícolas de Imperial Valley, California."
    },
    stack: ["Python", "xarray", "Herbie", "Geospatial AI", "EN / ES"],
    facts: [
      [{ en: "Role", es: "Puesto" }, { en: "AI & Data Scientist", es: "Científico de datos e IA" }],
      [{ en: "Data", es: "Datos" }, { en: "NOAA NBM · Hourly", es: "NOAA NBM · Cada hora" }],
      [{ en: "Region", es: "Región" }, { en: "Imperial Valley, California", es: "Imperial Valley, California" }],
      [{ en: "Output", es: "Resultado" }, { en: "Maps · Forecasts · AI assistant", es: "Mapas · Previsiones · Asistente con IA" }]
    ],
    story: [
      {
        title: { en: "The problem", es: "El problema" },
        body: {
          en: ["Outdoor heat exposure is not represented by air temperature alone. Workers and supervisors need local Wet Bulb Globe Temperature information, but the underlying forecast data and technical definitions are difficult to access and interpret."],
          es: ["La temperatura del aire no basta para medir la exposición al calor al aire libre. Trabajadores y supervisores necesitan datos locales del índice Wet Bulb Globe Temperature (WBGT), pero tanto los datos como las definiciones técnicas son difíciles de consultar e interpretar."]
        }
      },
      {
        title: { en: "My contribution", es: "Mi contribución" },
        body: {
          en: ["I developed and validated Python forecast pipelines using NOAA NBM data, integrated hourly WBGT outputs into the geospatial workflow, and contributed to the bilingual assistant and full-stack product."],
          es: ["Desarrollé y validé pipelines de previsión en Python con datos de NOAA NBM, integré los resultados horarios de WBGT en el flujo geoespacial y colaboré en el asistente bilingüe y en el producto full-stack."]
        },
        bullets: {
          en: ["Acquire and process structured forecasts with Herbie and xarray.", "Calculate geospatial heat-risk outputs for hourly updates.", "Explain risk indices and product usage in English and Spanish."],
          es: ["Descargar y procesar previsiones estructuradas con Herbie y xarray.", "Calcular el riesgo por calor sobre el mapa con actualizaciones cada hora.", "Explicar los índices de riesgo y cómo usar el producto, en inglés y en español."]
        }
      },
      {
        title: { en: "What it produced", es: "Qué produjo" },
        body: {
          en: ["The work became a publicly documented SDSU research product and led to two peer-reviewed papers in Elsevier journals: one on its architecture and modelling framework (IJDRR) and one on the AI chatbot (Climate Services)."],
          es: ["El trabajo se convirtió en un producto de investigación de SDSU con documentación pública y dio lugar a dos artículos con revisión por pares en revistas de Elsevier: uno sobre su arquitectura y su modelo (IJDRR) y otro sobre el chatbot de IA (Climate Services)."]
        }
      }
    ],
    actions: [
      { label: { en: "Open iHeatApp", es: "Abrir iHeatApp" }, href: "https://rhialarm.sdsu.edu/" },
      { label: { en: "Official project", es: "Proyecto oficial" }, href: "https://ruralheatislands.sdsu.edu/products.html" }
    ],
    mediaTitle: { en: "Explore iHeatApp live.", es: "Explora iHeatApp en directo." },
    mediaNote: {
      en: "The deployed application is embedded below. You can explore the map here or open the full experience in a new tab.",
      es: "La aplicación real está integrada aquí abajo. Puedes explorar el mapa desde aquí o abrirla completa en otra pestaña."
    },
    media: {
      type: "website",
      src: "https://rhialarm.sdsu.edu/",
      height: 720
    }
  },

  cloudya: {
    title: { en: "Weather with Cloudya", es: "Weather with Cloudya" },
    context: { en: "Full-stack climate product · Capstone", es: "Producto climático full-stack · Proyecto final" },
    year: "2025",
    cover: "assets/project-cloudya-v1.jpg",
    alt: {
      en: "Editorial illustration of weather data flowing into compact computing hardware",
      es: "Ilustración de datos meteorológicos llegando a un equipo pequeño"
    },
    lead: {
      en: "A self-hosted platform that makes hourly NOAA climate data explorable through a fast map interface and a vision assistant running from a Raspberry Pi.",
      es: "Una plataforma autoalojada para explorar los datos climáticos horarios de NOAA con un mapa rápido y un asistente con visión, todo corriendo en una Raspberry Pi."
    },
    stack: ["FastAPI", "React", "Deck.gl", "Docker", "Raspberry Pi"],
    facts: [
      [{ en: "Role", es: "Puesto" }, { en: "Full-stack team contributor", es: "Desarrollo full-stack en equipo" }],
      [{ en: "Source", es: "Fuente" }, { en: "NOAA RTMA · 2.5 km grid", es: "NOAA RTMA · Rejilla de 2,5 km" }],
      [{ en: "System", es: "Sistema" }, { en: "5 layers · 80–100 day cache", es: "5 capas · Caché de 80–100 días" }],
      [{ en: "Host", es: "Servidor" }, { en: "Raspberry Pi 4 · External SSD", es: "Raspberry Pi 4 · SSD externo" }]
    ],
    story: [
      {
        title: { en: "The problem", es: "El problema" },
        body: {
          en: ["NOAA’s real-time mesoscale analysis is scientifically valuable, but its archive is enormous and its file formats are not designed for casual exploration in a browser."],
          es: ["El análisis de mesoescala en tiempo real de NOAA es muy valioso a nivel científico, pero su archivo es enorme y sus formatos no están pensados para explorarlos cómodamente desde un navegador."]
        }
      },
      {
        title: { en: "The system", es: "El sistema" },
        body: {
          en: ["I contributed across environmental data processing, API design, geospatial conversion, React visualisation, Docker deployment and the physical edge-computing infrastructure."],
          es: ["Participé en el procesamiento de datos ambientales, el diseño de la API, la conversión geoespacial, la visualización con React, el despliegue con Docker y la infraestructura física de edge computing."]
        },
        bullets: {
          en: ["Process hourly RTMA files with xarray, rioxarray and SciPy.", "Serve compact payloads through FastAPI and ORJSON.", "Render interactive layers with React and Deck.gl.", "Connect a LLaMA 3.2 Vision assistant to screenshots and map context."],
          es: ["Procesar archivos RTMA horarios con xarray, rioxarray y SciPy.", "Servir respuestas ligeras con FastAPI y ORJSON.", "Pintar capas interactivas con React y Deck.gl.", "Conectar un asistente LLaMA 3.2 Vision con capturas y con el contexto del mapa."]
        }
      },
      {
        title: { en: "What it proves", es: "Qué demuestra" },
        body: {
          en: ["Open environmental data, containerised services and modest hardware can form a useful end-to-end product when storage, payload size and deployment constraints are treated as design inputs."],
          es: ["Con datos ambientales abiertos, servicios en contenedores y un hardware modesto se puede montar un producto completo si el almacenamiento, el tamaño de las respuestas y el despliegue se tratan como decisiones de diseño."]
        }
      }
    ],
    actions: [
      { label: { en: "Live application", es: "Ver la aplicación" }, href: "https://datamigos.win/" }
    ],
    mediaTitle: { en: "Explore the live system.", es: "Explora el sistema en directo." },
    mediaNote: {
      en: "The public application and the original recorded walkthrough are both preserved below.",
      es: "Aquí abajo están la aplicación pública y el vídeo original del recorrido."
    },
    media: [
      {
        type: "website",
        src: "https://datamigos.win/",
        height: 720
      },
      {
        type: "video",
        src: "assets/img/cloudya-demo.mp4",
        poster: "assets/img/cloudya-interface.jpg"
      }
    ],
    pdf: { src: "assets/docs/weather-with-cloudya.pdf", pages: 33 }
  },

  "flight-delay": {
    title: { en: "Flight Delay Prediction", es: "Predicción de retrasos de vuelos" },
    context: { en: "Machine learning · Conference research", es: "Machine learning · Investigación presentada en congreso" },
    year: "2024",
    cover: "assets/project-flight-delay-v1.jpg",
    alt: {
      en: "Editorial illustration of flight paths and a diverging delay signal",
      es: "Ilustración de rutas aéreas y de una señal de retraso que se desvía"
    },
    lead: {
      en: "A reproducible classification workflow joining aviation and weather data, comparing seven model families and presenting the results at WUSS 2024.",
      es: "Un flujo de clasificación reproducible que une datos de aviación y meteorología, compara siete familias de modelos y se presentó en WUSS 2024."
    },
    stack: ["Python", "XGBoost", "Pandas", "Streamlit", "SAS"],
    facts: [
      [{ en: "Source data", es: "Datos iniciales" }, { en: "3M flight records", es: "3 M de vuelos" }],
      [{ en: "Modelled", es: "Modelados" }, { en: "1.25M joined observations", es: "1,25 M de observaciones combinadas" }],
      [{ en: "Evaluation", es: "Evaluación" }, { en: "Macro F1 · 0.62", es: "F1 macro · 0,62" }],
      [{ en: "Presented", es: "Presentado" }, { en: "WUSS 2024", es: "WUSS 2024" }]
    ],
    story: [
      {
        title: { en: "The question", es: "La pregunta" },
        body: {
          en: ["Can delay risk be estimated from historical flight operations and weather conditions without hiding the difficulty created by class imbalance and operational variability?"],
          es: ["¿Se puede estimar el riesgo de retraso a partir del histórico de vuelos y de la meteorología sin esconder lo difícil que lo hacen el desequilibrio de clases y la variabilidad operativa?"]
        }
      },
      {
        title: { en: "The workflow", es: "El flujo de trabajo" },
        body: {
          en: ["I worked within the project team on data preparation, model comparison, analysis and the communication of results."],
          es: ["Trabajé en equipo en la preparación de los datos, la comparación de modelos, el análisis y la comunicación de los resultados."]
        },
        bullets: {
          en: ["Join flight and weather observations into a reproducible modelling table.", "Compare seven model families under the same evaluation framework.", "Expose the analysis through a Streamlit application and conference paper."],
          es: ["Unir vuelos y meteorología en una única tabla reproducible para modelar.", "Comparar siete familias de modelos con la misma evaluación.", "Presentar el análisis en una app de Streamlit y en un paper."]
        }
      },
      {
        title: { en: "The useful result", es: "El resultado útil" },
        body: {
          en: ["The project treats moderate performance honestly. The value lies in a transparent baseline, a reproducible comparison and a clear account of what the available features can and cannot explain."],
          es: ["El proyecto es honesto con un rendimiento moderado. Su valor está en una base de comparación transparente, una comparación reproducible y una explicación clara de qué pueden y qué no pueden explicar las variables disponibles."]
        }
      }
    ],
    actions: [
      { label: { en: "View code", es: "Ver código" }, href: "https://github.com/miguebmv/BDA602_MachineLearning" },
      { label: { en: "Course report", es: "Informe de la asignatura" }, href: "assets/docs/flight-delay-course-report.pdf" }
    ],
    pdf: { src: "assets/docs/flight-delay-wuss-paper.pdf", pages: 19 }
  },

  "california-traffic": {
    title: { en: "California Traffic Trends", es: "Tendencias de tráfico de California" },
    context: { en: "Geospatial analytics · Team project", es: "Analítica geoespacial · Proyecto en equipo" },
    year: "2023",
    cover: "assets/project-california-traffic-v1.jpg",
    alt: {
      en: "Editorial map of California traffic and demographic patterns",
      es: "Ilustración de un mapa con patrones de tráfico y demografía de California"
    },
    lead: {
      en: "An observational study combining traffic, population and income data to explore change across California between 2013 and 2022.",
      es: "Un estudio observacional que combina tráfico, población e ingresos para explorar los cambios en California entre 2013 y 2022."
    },
    stack: ["Tableau", "Python", "R", "ArcGIS"],
    facts: [
      [{ en: "Period", es: "Periodo" }, { en: "2013—2022", es: "2013—2022" }],
      [{ en: "Traffic data", es: "Datos de tráfico" }, { en: "65k+ observations", es: "Más de 65.000 observaciones" }],
      [{ en: "Sources", es: "Fuentes" }, { en: "Caltrans · US Census", es: "Caltrans · Censo de EE. UU." }],
      [{ en: "Output", es: "Resultado" }, { en: "Maps · Dashboards · Report", es: "Mapas · Dashboards · Informe" }]
    ],
    story: [
      {
        title: { en: "The question", es: "La pregunta" },
        body: {
          en: ["How do long-term traffic patterns vary alongside demographic and economic change, and where do those relationships become visible geographically?"],
          es: ["¿Cómo evolucionan los patrones de tráfico a largo plazo junto con los cambios demográficos y económicos, y en qué zonas se ve esa relación sobre el mapa?"]
        }
      },
      {
        title: { en: "My contribution", es: "Mi contribución" },
        body: {
          en: ["I supported data preparation and analysis, built visualisations, and helped design and write the public-facing project site and report."],
          es: ["Colaboré en la preparación y el análisis de los datos, hice las visualizaciones y ayudé a diseñar y escribir la web pública y el informe."]
        }
      },
      {
        title: { en: "How to read it", es: "Cómo interpretarlo" },
        body: {
          en: ["The study is observational. It surfaces spatial and temporal relationships without presenting correlation as causation—a distinction preserved in the report and visual narrative."],
          es: ["El estudio es observacional. Muestra relaciones espaciales y temporales sin presentar correlación como causalidad, algo que se mantiene en el informe y en la narrativa visual."]
        }
      }
    ],
    actions: [
      { label: { en: "Project website", es: "Web del proyecto" }, href: "https://sites.google.com/sdsu.edu/miguelsamigos" }
    ],
    mediaTitle: { en: "Visit the original project website.", es: "Visita la web original del proyecto." },
    mediaNote: {
      en: "Google Sites prevents external embedding, so this visual preview opens the complete website in a new tab.",
      es: "Google Sites no permite incrustar la web en otras páginas, así que esta vista previa abre la web completa en otra pestaña."
    },
    media: {
      type: "external",
      src: "https://sites.google.com/sdsu.edu/miguelsamigos",
      poster: "assets/project-california-traffic-v1.jpg"
    },
    pdf: { src: "assets/docs/california-traffic.pdf", pages: 13 }
  },

  diamond: {
    title: { en: "Diamond Price Modelling", es: "Modelado de precios de diamantes" },
    context: { en: "Regression · Academic study", es: "Regresión · Estudio académico" },
    year: "2024",
    cover: "assets/project-diamond-v1.jpg",
    alt: {
      en: "Editorial illustration of diamond facets and regression surfaces",
      es: "Ilustración de facetas de diamante y superficies de regresión"
    },
    lead: {
      en: "A controlled comparison of six regression approaches on 53,940 diamonds, including transformed targets and non-linear models.",
      es: "Una comparación controlada de seis enfoques de regresión sobre 53.940 diamantes, con variable objetivo transformada y modelos no lineales."
    },
    stack: ["Regression", "Random Forest", "Neural networks", "EDA"],
    facts: [
      [{ en: "Rows", es: "Registros" }, { en: "53,940 diamonds", es: "53.940 diamantes" }],
      [{ en: "Approaches", es: "Enfoques" }, { en: "6 regression families", es: "6 familias de regresión" }],
      [{ en: "Target", es: "Objetivo" }, { en: "Price prediction", es: "Predicción del precio" }],
      [{ en: "Report", es: "Informe" }, { en: "20 pages", es: "20 páginas" }]
    ],
    story: [
      {
        title: { en: "The modelling task", es: "La tarea de modelado" },
        body: {
          en: ["Diamond price combines physical measurements, categorical quality grades and strong non-linear relationships. The project asks how much each model family benefits from transformations and flexibility."],
          es: ["El precio de un diamante mezcla medidas físicas, categorías de calidad y relaciones muy poco lineales. El proyecto estudia cuánto gana cada familia de modelos con las transformaciones y con más flexibilidad."]
        }
      },
      {
        title: { en: "The comparison", es: "La comparación" },
        body: {
          en: ["Six approaches are evaluated through a common train/test workflow, supported by exploratory analysis, residual diagnostics and comparison of predictive error."],
          es: ["Los seis enfoques se evalúan con el mismo flujo de entrenamiento y test, apoyado en análisis exploratorio, diagnóstico de residuos y comparación del error de predicción."]
        }
      },
      {
        title: { en: "What it demonstrates", es: "Qué demuestra" },
        body: {
          en: ["The report shows model selection as an evidence-based comparison rather than a single algorithm choice, and documents why transformed targets can materially change model behaviour."],
          es: ["El informe plantea la elección del modelo como una comparación basada en evidencia y explica por qué transformar la variable objetivo puede cambiar bastante el comportamiento del modelo."]
        }
      }
    ],
    pdf: { src: "assets/docs/diamond-prices.pdf", pages: 20 }
  },

  pharmasys: {
    title: { en: "PharmaSys", es: "PharmaSys" },
    context: { en: "Relational data · Cloud deployment", es: "Datos relacionales · Despliegue en la nube" },
    year: "2024",
    cover: "assets/project-pharmasys-v1.jpg",
    alt: {
      en: "Editorial illustration of a relational pharmacy database",
      es: "Ilustración de la base de datos relacional de una farmacia"
    },
    lead: {
      en: "A relational database system designed, deployed and queried to support inventory, prescription and operational analysis.",
      es: "Una base de datos relacional que diseñé, desplegué y consulté para analizar inventario, recetas y operaciones."
    },
    stack: ["MySQL", "AWS RDS", "SQL", "Python", "Plotly"],
    facts: [
      [{ en: "Model", es: "Modelo" }, { en: "Relational database", es: "Base de datos relacional" }],
      [{ en: "Deployment", es: "Despliegue" }, { en: "AWS RDS", es: "AWS RDS" }],
      [{ en: "Analysis", es: "Análisis" }, { en: "SQL · Python · Plotly", es: "SQL · Python · Plotly" }],
      [{ en: "Includes", es: "Incluye" }, { en: "Schema · Queries · Report", es: "Esquema · Consultas · Informe" }]
    ],
    story: [
      {
        title: { en: "The system", es: "El sistema" },
        body: {
          en: ["Pharmacy operations connect medicines, suppliers, customers, prescriptions and transactions. The project turns those relationships into a normalised relational model with explicit constraints."],
          es: ["La operativa de una farmacia conecta medicamentos, proveedores, clientes, recetas y transacciones. El proyecto convierte esas relaciones en un modelo relacional normalizado con restricciones explícitas."]
        }
      },
      {
        title: { en: "From schema to analysis", es: "Del esquema al análisis" },
        body: {
          en: ["The database was implemented in MySQL, deployed through AWS RDS and queried from Python to produce operational views and interactive Plotly analysis."],
          es: ["La base de datos se implementó en MySQL, se desplegó en AWS RDS y se consultó desde Python para generar vistas operativas y análisis interactivos con Plotly."]
        }
      },
      {
        title: { en: "What it demonstrates", es: "Qué demuestra" },
        body: {
          en: ["The project connects data modelling decisions to the questions a real operation needs to answer, from entity integrity through cloud access and downstream reporting."],
          es: ["El proyecto une las decisiones de modelado con las preguntas que una operación real tiene que responder, desde la integridad de las entidades hasta el acceso desde la nube y los informes."]
        }
      }
    ],
    actions: [
      { label: { en: "Open notebook", es: "Abrir notebook" }, href: "https://colab.research.google.com/drive/1uCPlmbss821ahzybFM6u0MFWT-WA0nnj?usp=sharing" }
    ],
    pdf: { src: "assets/docs/pharmasys.pdf", pages: 20 }
  },

  walmart: {
    title: { en: "Walmart Sales Forecasting", es: "Previsión de ventas de Walmart" },
    context: { en: "Time series · Academic study", es: "Series temporales · Estudio académico" },
    year: "2024",
    cover: "assets/project-walmart-v1.jpg",
    alt: {
      en: "Editorial illustration of seasonal retail sales forecasting",
      es: "Ilustración de la previsión estacional de ventas de un comercio"
    },
    lead: {
      en: "A focused SARIMA comparison for weekly sales at Store 13, separating recurring seasonality from forecast uncertainty.",
      es: "Una comparación de modelos SARIMA para las ventas semanales de la tienda 13, separando la estacionalidad recurrente de la incertidumbre de la previsión."
    },
    stack: ["R", "SARIMA", "Time series", "Forecasting"],
    facts: [
      [{ en: "Target", es: "Objetivo" }, { en: "Weekly sales", es: "Ventas semanales" }],
      [{ en: "Scope", es: "Alcance" }, { en: "Store 13", es: "Tienda 13" }],
      [{ en: "Method", es: "Método" }, { en: "Seasonal ARIMA", es: "ARIMA estacional" }],
      [{ en: "Report", es: "Informe" }, { en: "16 pages", es: "16 páginas" }]
    ],
    story: [
      {
        title: { en: "The forecasting problem", es: "El problema de la previsión" },
        body: {
          en: ["Weekly retail sales contain strong recurring patterns and exceptional peaks. The task is to model that structure without treating every fluctuation as a lasting trend."],
          es: ["Las ventas semanales tienen patrones recurrentes muy marcados y picos excepcionales. La tarea es modelar esa estructura sin tomar cada fluctuación por una tendencia permanente."]
        }
      },
      {
        title: { en: "The approach", es: "El enfoque" },
        body: {
          en: ["The workflow isolates one store, inspects stationarity and seasonal behaviour, compares a focused set of SARIMA specifications and diagnoses the resulting residuals."],
          es: ["El flujo aísla una tienda, analiza la estacionariedad y la estacionalidad, compara un conjunto acotado de modelos SARIMA y diagnostica los residuos."]
        }
      },
      {
        title: { en: "What it demonstrates", es: "Qué demuestra" },
        body: {
          en: ["The project emphasises disciplined model specification and diagnostics over an unnecessarily broad algorithm search."],
          es: ["El proyecto apuesta por especificar y diagnosticar bien los modelos en lugar de probar algoritmos sin necesidad."]
        }
      }
    ],
    pdf: { src: "assets/docs/walmart-sales.pdf", pages: 16 }
  },

  "mental-health": {
    title: { en: "Mental Health & Technology", es: "Salud mental y tecnología" },
    context: { en: "Multivariate analysis · Academic study", es: "Análisis multivariante · Estudio académico" },
    year: "2024",
    cover: "assets/project-mental-health-v1.jpg",
    alt: {
      en: "Editorial illustration of overlapping multivariate observations",
      es: "Ilustración de observaciones multivariantes que se solapan"
    },
    lead: {
      en: "A multivariate study where weak separation and limited predictive signal became the important methodological result.",
      es: "Un estudio multivariante en el que la poca separación entre grupos y la escasa señal predictiva acabaron siendo el resultado metodológico más importante."
    },
    stack: ["R", "PCA", "ANOVA", "Clustering", "Classification"],
    facts: [
      [{ en: "Methods", es: "Métodos" }, { en: "PCA · ANOVA · Clustering", es: "PCA · ANOVA · Clustering" }],
      [{ en: "Question", es: "Pregunta" }, { en: "Technology and survey outcomes", es: "Tecnología y resultados de encuesta" }],
      [{ en: "Finding", es: "Hallazgo" }, { en: "Weak predictive separation", es: "Poca separación predictiva" }],
      [{ en: "Report", es: "Informe" }, { en: "29 pages", es: "29 páginas" }]
    ],
    story: [
      {
        title: { en: "The question", es: "La pregunta" },
        body: {
          en: ["The study explores whether patterns in technology-related survey responses reveal stable multivariate structure or useful predictive separation."],
          es: ["El estudio explora si los patrones en las respuestas de una encuesta sobre tecnología muestran una estructura multivariante estable o una separación predictiva útil."]
        }
      },
      {
        title: { en: "The analysis", es: "El análisis" },
        body: {
          en: ["PCA, clustering, ANOVA and classification are used as complementary views rather than as a search for one convenient positive result."],
          es: ["PCA, clustering, ANOVA y clasificación se usan como enfoques complementarios, no para buscar un único resultado positivo que convenga."]
        }
      },
      {
        title: { en: "Why the weak result matters", es: "Por qué importa un resultado flojo" },
        body: {
          en: ["The available variables do not support a strong predictive claim. Reporting that limitation clearly is the central methodological outcome and avoids turning exploratory associations into overconfident conclusions."],
          es: ["Las variables disponibles no permiten afirmar nada fuerte sobre predicción. Contar esa limitación con claridad es el resultado metodológico central, y evita convertir asociaciones exploratorias en conclusiones exageradas."]
        }
      }
    ],
    pdf: { src: "assets/docs/mental-health-tech.pdf", pages: 29 }
  },

  "p5-game": {
    title: { en: "Getting Started with p5.js", es: "Primeros pasos con p5.js" },
    context: { en: "Interactive visualisation · Lab", es: "Visualización interactiva · Práctica" },
    year: "2023",
    cover: "assets/project-p5-game-v1.jpg",
    alt: {
      en: "Editorial illustration of motion and collision in an interactive game",
      es: "Ilustración de movimiento y colisiones en un juego interactivo"
    },
    lead: {
      en: "A small interactive archery game for learning the p5.js drawing loop, input events, gravity and collision logic.",
      es: "Un juego sencillo de tiro con arco para aprender el bucle de dibujo de p5.js, los eventos de entrada, la gravedad y las colisiones."
    },
    stack: ["p5.js", "JavaScript", "Interaction", "Collision logic"],
    facts: [
      [{ en: "Format", es: "Formato" }, { en: "Interactive game", es: "Juego interactivo" }],
      [{ en: "Input", es: "Entrada" }, { en: "Mouse events", es: "Eventos de ratón" }],
      [{ en: "Concepts", es: "Conceptos" }, { en: "Gravity · Motion · Collision", es: "Gravedad · Movimiento · Colisión" }],
      [{ en: "Source", es: "Código" }, { en: "GitHub", es: "GitHub" }]
    ],
    story: [
      {
        title: { en: "The exercise", es: "El ejercicio" },
        body: {
          en: ["The project translates the first principles of p5.js into an interactive game: aim at a target, launch an arrow, account for gravity and manage a limited number of attempts."],
          es: ["El proyecto lleva los primeros conceptos de p5.js a un juego: apuntar a una diana, lanzar una flecha, tener en cuenta la gravedad y gestionar un número limitado de intentos."]
        }
      },
      {
        title: { en: "What I learned", es: "Qué aprendí" },
        body: {
          en: ["The drawing loop, event handling and collision logic become easier to understand when their state changes are visible and directly controlled."],
          es: ["El bucle de dibujo, los eventos y las colisiones se entienden mucho mejor cuando los cambios de estado se ven y se controlan directamente."]
        }
      }
    ],
    actions: [
      { label: { en: "Open interactive demo", es: "Abrir demo interactiva" }, href: "https://editor.p5js.org/mbravomartinez0754/full/l_7HYeyAB" },
      { label: { en: "View source", es: "Ver código" }, href: "https://github.com/miguebmv/Data-Visualization-Projects/tree/main/Lab1%20(Getting%20Started%20with%20p5.js)" }
    ],
    media: {
      type: "iframe",
      src: "https://editor.p5js.org/mbravomartinez0754/full/l_7HYeyAB",
      height: 550
    }
  },

  "campus-map": {
    title: { en: "Interactive Campus Map", es: "Mapa interactivo del campus" },
    context: { en: "Cartographic interaction · Lab", es: "Interacción cartográfica · Práctica" },
    year: "2023",
    cover: "assets/project-campus-map-v1.jpg",
    alt: {
      en: "Editorial illustration of a searchable university campus map",
      es: "Ilustración de un mapa universitario con buscador"
    },
    lead: {
      en: "A zoomable and searchable SDSU campus map with building-level information, photographs and multiple-resolution source imagery.",
      es: "Un mapa del campus de SDSU con zoom y buscador, con información de cada edificio, fotos e imágenes de origen a varias resoluciones."
    },
    stack: ["p5.js", "Maps", "Search", "SVG", "Interaction"],
    facts: [
      [{ en: "Area", es: "Área" }, { en: "SDSU campus", es: "Campus de SDSU" }],
      [{ en: "Navigation", es: "Navegación" }, { en: "Zoom · Pan · Search", es: "Zoom · Arrastre · Búsqueda" }],
      [{ en: "Detail", es: "Detalle" }, { en: "Building information", es: "Información por edificio" }],
      [{ en: "Source", es: "Código" }, { en: "GitHub", es: "GitHub" }]
    ],
    story: [
      {
        title: { en: "The interaction", es: "La interacción" },
        body: {
          en: ["Visitors can pan and zoom across the campus, search for a building and reveal names, information or photography attached to selected locations."],
          es: ["Puedes moverte por el campus, hacer zoom, buscar un edificio y ver nombres, información o fotos de los lugares que selecciones."]
        }
      },
      {
        title: { en: "The data", es: "Los datos" },
        body: {
          en: ["The project combines aerial imagery and building layers supplied at multiple resolutions, including SVG geometry for interactive selection."],
          es: ["El proyecto combina imágenes aéreas y capas de edificios a varias resoluciones, con geometría SVG para poder seleccionarlos."]
        }
      }
    ],
    actions: [
      { label: { en: "Open interactive demo", es: "Abrir demo interactiva" }, href: "https://editor.p5js.org/mbravomartinez0754/full/aTKaZh4p9" },
      { label: { en: "View source", es: "Ver código" }, href: "https://github.com/miguebmv/Data-Visualization-Projects/tree/main/Lab2" }
    ],
    media: {
      type: "iframe",
      src: "https://editor.p5js.org/mbravomartinez0754/full/aTKaZh4p9",
      height: 550
    }
  },

  "news-geo": {
    title: { en: "News Geovisualisation", es: "Geovisualización de noticias" },
    context: { en: "APIs and geocoding · Lab", es: "APIs y geolocalización · Práctica" },
    year: "2023",
    cover: "assets/project-news-geo-v1.jpg",
    alt: {
      en: "Editorial world map connecting news stories to locations",
      es: "Ilustración de un mapamundi que conecta noticias con lugares"
    },
    lead: {
      en: "A map that searches recent news, geocodes the results and connects each story to its geographic context.",
      es: "Un mapa que busca noticias recientes, las geolocaliza y conecta cada historia con su contexto geográfico."
    },
    stack: ["p5.js", "REST APIs", "Geocoding", "Maps"],
    facts: [
      [{ en: "Input", es: "Entrada" }, { en: "News search", es: "Búsqueda de noticias" }],
      [{ en: "Enrichment", es: "Enriquecimiento" }, { en: "Location geocoding", es: "Geolocalización de lugares" }],
      [{ en: "Output", es: "Resultado" }, { en: "Interactive map", es: "Mapa interactivo" }],
      [{ en: "Source", es: "Código" }, { en: "GitHub", es: "GitHub" }]
    ],
    story: [
      {
        title: { en: "The idea", es: "La idea" },
        body: {
          en: ["A news result carries more meaning when the reader can see where the story takes place and how nearby results relate spatially."],
          es: ["Una noticia dice más cuando puedes ver dónde ocurre y cómo se relacionan en el espacio las noticias cercanas."]
        }
      },
      {
        title: { en: "The workflow", es: "El flujo" },
        body: {
          en: ["The application searches a recent-news API, extracts or resolves place information, geocodes the result and displays it in an interactive p5.js map."],
          es: ["La aplicación consulta una API de noticias recientes, extrae o deduce el lugar, lo geolocaliza y lo muestra en un mapa interactivo hecho con p5.js."]
        }
      }
    ],
    actions: [
      { label: { en: "Open interactive demo", es: "Abrir demo interactiva" }, href: "https://editor.p5js.org/mbravomartinez0754/full/PzQfSaehQ" },
      { label: { en: "View source", es: "Ver código" }, href: "https://github.com/miguebmv/Data-Visualization-Projects/tree/main/Lab3" }
    ],
    media: {
      type: "iframe",
      src: "https://editor.p5js.org/mbravomartinez0754/full/PzQfSaehQ",
      height: 650
    }
  },

  "us-crime": {
    title: { en: "US Crime Trend Explorer", es: "Explorador de la delincuencia en EE. UU." },
    context: { en: "Multitemporal geovisualisation · Lab", es: "Geovisualización multitemporal · Práctica" },
    year: "2023",
    cover: "assets/project-us-crime-v1.jpg",
    alt: {
      en: "Editorial map of changing US crime-rate centroids",
      es: "Ilustración de un mapa con los centroides de las tasas de criminalidad en EE. UU. desplazándose"
    },
    lead: {
      en: "Multivariate and multitemporal views of state crime rates, choropleth patterns and moving geographic centroids.",
      es: "Vistas multivariantes y multitemporales de las tasas por estado, con mapas coropléticos y centroides geográficos que se mueven."
    },
    stack: ["p5.js", "Time", "Choropleth", "Geospatial data"],
    facts: [
      [{ en: "Geography", es: "Geografía" }, { en: "US states", es: "Estados de EE. UU." }],
      [{ en: "Views", es: "Vistas" }, { en: "Multivariate · Multitemporal", es: "Multivariante · Multitemporal" }],
      [{ en: "Method", es: "Método" }, { en: "Moving centroids", es: "Centroides móviles" }],
      [{ en: "Source", es: "Código" }, { en: "GitHub", es: "GitHub" }]
    ],
    story: [
      {
        title: { en: "The visual question", es: "La pregunta visual" },
        body: {
          en: ["How do state-level patterns change over time, and how does the geographic centre associated with a selected measure move as those values change?"],
          es: ["¿Cómo cambian con el tiempo los patrones por estado y cómo se desplaza el centro geográfico de una medida a medida que cambian sus valores?"]
        }
      },
      {
        title: { en: "The views", es: "Las vistas" },
        body: {
          en: ["The project combines choropleth encoding, temporal controls, multiple measures and moving centroids so that geography and time can be inspected together."],
          es: ["El proyecto combina mapas coropléticos, controles de tiempo, varias medidas y centroides móviles para ver a la vez la geografía y el tiempo."]
        }
      },
      {
        title: { en: "Interpretation", es: "Interpretación" },
        body: {
          en: ["The visualisation is descriptive. It supports pattern exploration while avoiding causal claims about crime or individual communities."],
          es: ["La visualización es descriptiva. Ayuda a explorar patrones sin hacer afirmaciones causales sobre la delincuencia ni sobre comunidades concretas."]
        }
      }
    ],
    actions: [
      { label: { en: "Open interactive demo", es: "Abrir demo interactiva" }, href: "https://editor.p5js.org/mbravomartinez0754/full/16gBNuxNE" },
      { label: { en: "View source", es: "Ver código" }, href: "https://github.com/miguebmv/Data-Visualization-Projects/tree/main/Lab4" }
    ],
    media: {
      type: "iframe",
      src: "https://editor.p5js.org/mbravomartinez0754/full/16gBNuxNE",
      height: 840
    }
  }
};

const UI = {
  en: {
    allWork: "All work",
    caseStudy: "Case study",
    demonstration: "Demonstration",
    seeIt: "See the system in context.",
    mediaNote: "A closer look at the interface and how the project behaves.",
    tryIt: "Try the project.",
    interactiveNote: "The original p5.js sketch is live below. Interact with it here or open it in a separate tab.",
    livePreview: "Live preview",
    recordedDemo: "Recorded walkthrough",
    openNewTab: "Open in new tab",
    externalPreview: "Website preview",
    openWebsite: "Open complete website",
    fullReport: "Full report",
    readResearch: "Read the research",
    reportNote: "The complete document is embedded below. You can also open or download the original PDF.",
    openPdf: "Open PDF",
    downloadPdf: "Download",
    pdfFallback: "This browser cannot display the embedded PDF.",
    previous: "Previous project",
    next: "Next project",
    backPortfolio: "Back to portfolio",
    pages: "pages"
  },
  es: {
    allWork: "Todos los proyectos",
    caseStudy: "Caso de estudio",
    demonstration: "Demo",
    seeIt: "Mira el sistema en acción.",
    mediaNote: "Una mirada de cerca a la interfaz y a cómo funciona el proyecto.",
    tryIt: "Prueba el proyecto.",
    interactiveNote: "El sketch original de p5.js funciona aquí abajo. Pruébalo desde aquí o ábrelo en otra pestaña.",
    livePreview: "Vista previa en directo",
    recordedDemo: "Recorrido en vídeo",
    openNewTab: "Abrir en otra pestaña",
    externalPreview: "Vista previa de la web",
    openWebsite: "Abrir la web completa",
    fullReport: "Informe completo",
    readResearch: "Leer la investigación",
    reportNote: "El documento completo está aquí abajo. También puedes abrir o descargar el PDF original.",
    openPdf: "Abrir PDF",
    downloadPdf: "Descargar",
    pdfFallback: "Tu navegador no puede mostrar el PDF aquí.",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
    backPortfolio: "Volver al portfolio",
    pages: "páginas"
  }
};

const requestedId = new URLSearchParams(window.location.search).get("id");
const currentId = PROJECT_ORDER.includes(requestedId) ? requestedId : PROJECT_ORDER[0];
const currentProject = PROJECTS[currentId];
const languageButton = document.querySelector("[data-language-toggle]");
const languageCurrent = document.querySelector(".language-current");
const themeButton = document.querySelector("[data-theme-toggle]");
const metaTheme = document.querySelector('meta[name="theme-color"]');
let interactiveObservers = [];

function localized(value, language) {
  if (value == null || typeof value === "string") return value || "";
  return value[language] || value.en || "";
}

function createAction(action, language, className = "detail-button") {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = action.href;
  anchor.textContent = `${localized(action.label, language)} ↗︎`;
  if (/^https?:/.test(action.href)) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  return anchor;
}

function renderIndex(language) {
  const container = document.querySelector("[data-project-index]");
  container.innerHTML = "";
  PROJECT_ORDER.forEach((id, index) => {
    const anchor = document.createElement("a");
    anchor.href = `project.html?id=${id}`;
    anchor.classList.toggle("is-current", id === currentId);
    if (id === currentId) anchor.setAttribute("aria-current", "page");
    anchor.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><b>${localized(PROJECTS[id].title, language)}</b>`;
    container.append(anchor);
  });
}

function renderStory(language) {
  const container = document.querySelector("[data-project-story]");
  container.innerHTML = "";
  currentProject.story.forEach((section) => {
    const block = document.createElement("section");
    block.className = "story-block";
    const title = document.createElement("h2");
    title.textContent = localized(section.title, language);
    block.append(title);

    const copy = document.createElement("div");
    copy.className = "story-copy";
    localized(section.body, language).forEach((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      copy.append(element);
    });

    if (section.bullets) {
      const list = document.createElement("ul");
      localized(section.bullets, language).forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.append(listItem);
      });
      copy.append(list);
    }
    block.append(copy);
    container.append(block);
  });
}

function renderFacts(language) {
  const container = document.querySelector("[data-project-facts]");
  container.innerHTML = "";
  currentProject.facts.forEach(([label, value]) => {
    const group = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = localized(label, language);
    description.textContent = localized(value, language);
    group.append(term, description);
    container.append(group);
  });

  const stackGroup = document.createElement("div");
  stackGroup.className = "fact-stack";
  const stackTerm = document.createElement("dt");
  const stackDescription = document.createElement("dd");
  stackTerm.textContent = language === "es" ? "Tecnologías" : "Technologies";
  stackDescription.textContent = currentProject.stack.join(" · ");
  stackGroup.append(stackTerm, stackDescription);
  container.append(stackGroup);
}

function renderActions(language) {
  const container = document.querySelector("[data-project-actions]");
  container.innerHTML = "";
  (currentProject.actions || []).forEach((action) => {
    container.append(createAction(action, language));
  });
  if (currentProject.pdf) {
    container.append(createAction(
      { label: { en: "Read report", es: "Leer informe" }, href: "#report" },
      language,
      "detail-button detail-button--secondary"
    ));
  }
}

function renderMedia(language) {
  const section = document.querySelector("[data-project-media]");
  const container = document.querySelector("[data-media-container]");
  const title = section.querySelector("[data-ui='seeIt']");
  const note = section.querySelector("[data-ui='mediaNote']");
  interactiveObservers.forEach((observer) => observer.disconnect());
  interactiveObservers = [];
  container.innerHTML = "";
  section.hidden = !currentProject.media;
  if (!currentProject.media) return;

  const mediaItems = Array.isArray(currentProject.media)
    ? currentProject.media
    : [currentProject.media];
  const hasInteractiveSketch = mediaItems.some((item) => item.type === "iframe");
  title.textContent = currentProject.mediaTitle
    ? localized(currentProject.mediaTitle, language)
    : hasInteractiveSketch ? UI[language].tryIt : UI[language].seeIt;
  note.textContent = currentProject.mediaNote
    ? localized(currentProject.mediaNote, language)
    : hasInteractiveSketch ? UI[language].interactiveNote : UI[language].mediaNote;

  mediaItems.forEach((media) => {
    if (media.type === "video") {
      const block = document.createElement("div");
      block.className = "media-item";
      if (mediaItems.length > 1) {
        const label = document.createElement("p");
        label.className = "media-item__label";
        label.textContent = UI[language].recordedDemo;
        block.append(label);
      }
      const video = document.createElement("video");
      video.className = "project-video";
      video.controls = true;
      video.preload = "metadata";
      video.poster = media.poster;
      video.setAttribute("playsinline", "");
      video.setAttribute("aria-label", language === "es" ? "Demostración del proyecto" : "Project demonstration");
      const source = document.createElement("source");
      source.src = media.src;
      source.type = "video/mp4";
      video.append(source);
      block.append(video);
      container.append(block);
    }

    if (media.type === "iframe") {
      const viewport = document.createElement("div");
      viewport.className = "interactive-viewport";
      const frame = document.createElement("iframe");
      frame.className = "interactive-frame";
      frame.src = media.src;
      frame.title =
        language === "es"
          ? `Demo interactiva de ${localized(currentProject.title, language)}`
          : `Interactive demo of ${localized(currentProject.title, language)}`;
      frame.loading = "lazy";
      frame.allowFullscreen = true;
      const naturalWidth = 900;
      const naturalHeight = media.height;
      frame.style.width = `${naturalWidth}px`;
      frame.style.height = `${naturalHeight}px`;
      viewport.append(frame);
      container.append(viewport);

      const fitFrame = () => {
        const scale = Math.min(1, viewport.clientWidth / naturalWidth);
        frame.style.transform = `scale(${scale})`;
        viewport.style.height = `${naturalHeight * scale}px`;
      };
      fitFrame();
      const observer = new ResizeObserver(fitFrame);
      observer.observe(viewport);
      interactiveObservers.push(observer);
    }

    if (media.type === "website") {
      const preview = document.createElement("div");
      preview.className = "website-preview";
      const toolbar = document.createElement("div");
      toolbar.className = "website-preview__toolbar";
      const status = document.createElement("span");
      status.textContent = `${UI[language].livePreview} · ${new URL(media.src).hostname}`;
      const external = document.createElement("a");
      external.href = media.src;
      external.target = "_blank";
      external.rel = "noreferrer";
      external.textContent = `${UI[language].openNewTab} ↗︎`;
      toolbar.append(status, external);

      const frame = document.createElement("iframe");
      frame.className = "website-frame";
      frame.src = media.src;
      frame.title =
        language === "es"
          ? `Aplicación web de ${localized(currentProject.title, language)}`
          : `${localized(currentProject.title, language)} web application`;
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.style.setProperty("--website-height", `${media.height || 700}px`);
      preview.append(toolbar, frame);
      container.append(preview);
    }

    if (media.type === "external") {
      const preview = document.createElement("a");
      preview.className = "external-preview";
      preview.href = media.src;
      preview.target = "_blank";
      preview.rel = "noreferrer";
      const image = document.createElement("img");
      image.src = media.poster;
      image.alt = localized(currentProject.alt, language);
      const copy = document.createElement("span");
      copy.className = "external-preview__copy";
      const label = document.createElement("span");
      label.textContent = `${UI[language].externalPreview} · ${new URL(media.src).hostname}`;
      const action = document.createElement("strong");
      action.textContent = `${UI[language].openWebsite} ↗︎`;
      copy.append(label, action);
      preview.append(image, copy);
      container.append(preview);
    }
  });
}

function renderReport(language) {
  const section = document.querySelector("[data-project-report]");
  section.id = "report";
  section.hidden = !currentProject.pdf;
  if (!currentProject.pdf) return;

  document.querySelector("[data-report-number]").textContent = currentProject.media ? "03" : "02";
  document.querySelector("[data-report-pages]").textContent =
    ` · ${currentProject.pdf.pages} ${UI[language].pages}`;

  const object = document.querySelector("[data-pdf-object]");
  object.data = `${currentProject.pdf.src}#view=FitH`;
  object.setAttribute(
    "aria-label",
    language === "es"
      ? `Informe: ${localized(currentProject.title, language)}`
      : `Embedded report: ${localized(currentProject.title, language)}`
  );

  const fallback = document.querySelector("[data-pdf-fallback]");
  fallback.href = currentProject.pdf.src;

  const actions = document.querySelector("[data-report-actions]");
  actions.innerHTML = "";
  actions.append(
    createAction(
      { label: { en: "Open PDF", es: "Abrir PDF" }, href: currentProject.pdf.src },
      language,
      "detail-button"
    )
  );
  const download = createAction(
    { label: { en: "Download", es: "Descargar" }, href: currentProject.pdf.src },
    language,
    "detail-button detail-button--secondary"
  );
  download.removeAttribute("target");
  download.removeAttribute("rel");
  download.setAttribute("download", "");
  actions.append(download);
}

function renderPagination(language) {
  const index = PROJECT_ORDER.indexOf(currentId);
  const previousId = PROJECT_ORDER[(index - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length];
  const nextId = PROJECT_ORDER[(index + 1) % PROJECT_ORDER.length];
  const previous = document.querySelector("[data-previous-project]");
  const next = document.querySelector("[data-next-project]");
  previous.href = `project.html?id=${previousId}`;
  next.href = `project.html?id=${nextId}`;
  document.querySelector("[data-previous-title]").textContent = localized(PROJECTS[previousId].title, language);
  document.querySelector("[data-next-title]").textContent = localized(PROJECTS[nextId].title, language);
}

function applyLanguage(language) {
  const nextLanguage = language === "es" ? "es" : "en";
  document.documentElement.lang = nextLanguage;
  document.title = `${localized(currentProject.title, nextLanguage)} — Miguel Bravo`;
  document.querySelector('meta[name="description"]').content = localized(currentProject.lead, nextLanguage);
  document.querySelectorAll("[data-ui]").forEach((element) => {
    element.textContent = UI[nextLanguage][element.dataset.ui];
  });

  document.querySelector("[data-project-context]").textContent = localized(currentProject.context, nextLanguage);
  document.querySelector("[data-project-year]").textContent = currentProject.year;
  document.querySelector("[data-project-title]").textContent = localized(currentProject.title, nextLanguage);
  document.querySelector("[data-project-lead]").textContent = localized(currentProject.lead, nextLanguage);
  const cover = document.querySelector("[data-project-cover]");
  cover.src = currentProject.cover;
  cover.alt = localized(currentProject.alt, nextLanguage);

  renderIndex(nextLanguage);
  renderActions(nextLanguage);
  renderFacts(nextLanguage);
  renderStory(nextLanguage);
  renderMedia(nextLanguage);
  renderReport(nextLanguage);
  renderPagination(nextLanguage);

  languageCurrent.textContent = nextLanguage === "es" ? "EN" : "ES";
  languageButton.setAttribute(
    "aria-label",
    nextLanguage === "es" ? "View in English" : "Cambiar a español"
  );
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  themeButton.setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Use light colour theme" : "Usar tema oscuro"
  );
  metaTheme.content = nextTheme === "dark" ? "#101722" : "#f4f2ed";
}

document.querySelector("[data-project-position]").textContent =
  String(PROJECT_ORDER.indexOf(currentId) + 1).padStart(2, "0");
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

applyLanguage(document.documentElement.lang);
applyTheme(document.documentElement.dataset.theme);

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
  applyLanguage(nextLanguage);
  localStorage.setItem("mabravo-mockup-language", nextLanguage);
});

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("mabravo-mockup-theme", nextTheme);
});

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
});
