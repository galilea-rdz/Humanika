# PRD — Sitio Web Humanika
**Versión:** 1.0  
**Fecha:** Junio 2026  
**Clasificación:** Documento Maestro de Producto  
**Destinatario:** Equipo de desarrollo / Claude Code

---

## 1. Objetivo del Producto

Desarrollar el sitio web institucional de **Humanika**, una consultoría especializada en salud mental organizacional, NOM-035 y prevención de riesgos psicosociales para empresas en México.

### Objetivo principal
**Generación de prospectos calificados.** El sitio no es un portafolio informativo; es un canal de conversión B2B. Cada sección existe para mover al visitante hacia una acción: solicitar un diagnóstico gratuito o agendar una llamada.

### Objetivos secundarios
- Posicionar a Humanika como consultoría corporativa especializada (no consultorio individual).
- Transmitir credibilidad, metodología y experiencia comprobable.
- Establecer la base técnica para futuras funcionalidades (CRM, plataforma de diagnóstico, blog, dashboards).

### Métricas de éxito (KPIs primarios)
| Métrica | Meta (90 días post-lanzamiento) |
|---|---|
| Tasa de conversión (visitas → formulario) | ≥ 3% |
| Formularios enviados / mes | ≥ 15 |
| Tiempo de permanencia promedio | ≥ 2:30 min |
| Tasa de rebote | ≤ 55% |

---

## 2. Usuarios Objetivo

### Perfil primario — Tomadores de decisión en empresas mexicanas

**Roles:** Gerente/Director de Recursos Humanos, responsable de EHS (Environment, Health & Safety), Gerente de Relaciones Laborales, Director General de empresa mediana o grande.

**Contexto:** Enfrentan presión regulatoria (NOM-035), indicadores negativos de clima laboral, o necesidad de demostrar acciones de bienestar ante auditorías o dirección general.

**Motivaciones:**
- Cumplir NOM-035 sin incurrir en multas o riesgos legales.
- Reducir ausentismo, rotación y conflictos internos.
- Implementar programas de bienestar con sustento técnico.
- Encontrar un aliado externo que entienda el entorno manufacturero/corporativo.

**Barreras:**
- Desconfianza en consultores sin experiencia industrial real.
- Presupuestos acotados que requieren justificación de ROI.
- Saturación de ofertas genéricas de "bienestar" sin metodología.

**Comportamiento digital:** Buscan en Google términos como "consultoría NOM-035 Monterrey", "diagnóstico riesgos psicosociales empresa", "programa bienestar organizacional". Visitan el sitio en horario laboral desde escritorio. Toman decisiones consultivas (no impulsivas); necesitan evidencia antes de contactar.

### Perfil secundario — Gerentes de área operativa

**Roles:** Gerentes de planta, superintendentes, líderes de producción en entornos manufactureros.

**Motivación:** Resolver problemas concretos de su equipo (conflictos, ausentismo, bajo desempeño relacionado con factores psicosociales) con apoyo institucional.

---

## 3. Arquitectura del Sitio

### Páginas principales (Fase 1)

```
humanika.mx/
├── / (Home — página de conversión principal)
├── /soluciones
│   ├── /nom-035
│   ├── /evaluaciones-psicologicas
│   ├── /programas-bienestar
│   ├── /intervencion-crisis
│   └── /capacitacion
├── /nosotros
├── /casos-de-exito (placeholder Fase 1; activo Fase 2)
├── /recursos (placeholder Fase 1; activo Fase 2)
├── /contacto
└── /diagnostico-gratuito (landing dedicada de conversión)
```

### Páginas de soporte técnico

```
├── /privacidad
├── /aviso-legal
└── /gracias (confirmación post-formulario con siguiente paso)
```

### Arquitectura de datos (base para Fase 2+)

- Formularios conectados a base de datos de prospectos (Airtable o similar como inicio).
- Preparación de schema para integración con CRM (HubSpot o Pipedrive).
- Metadata estructurada para SEO desde día 1.

---

## 4. Estructura de Navegación

### Navegación principal (header)

```
[Logo Humanika]    Soluciones   Nosotros   Recursos   Casos de Éxito   Contacto   [CTA: Diagnóstico Gratuito →]
```

- El CTA del header es un botón diferenciado (color acento), siempre visible.
- En móvil: menú hamburguesa con el CTA anclado en la parte inferior.
- El header es sticky (se mantiene al hacer scroll).

### Megamenú — Soluciones

```
Soluciones
├── NOM-035 STPS             → /soluciones/nom-035
├── Evaluaciones Psicológicas → /soluciones/evaluaciones-psicologicas
├── Programas de Bienestar   → /soluciones/programas-bienestar
├── Intervención en Crisis   → /soluciones/intervencion-crisis
└── Capacitación Corporativa → /soluciones/capacitacion
```

### Footer — Navegación secundaria

```
Humanika           Soluciones            Recursos              Legal
Logo               NOM-035               Blog (próximamente)   Aviso de Privacidad
Tagline            Evaluaciones          Guías descargables    Aviso Legal
LinkedIn           Bienestar             Diagnóstico NOM-035   
Email              Intervención          
Tel                Capacitación          
```

---

## 5. Contenido Esperado por Sección — Home

### Sección 0 — Hero

**Propósito:** Explicar el valor de Humanika en menos de 10 segundos. Primera impresión definitiva.

**Elementos requeridos:**

| Elemento | Contenido |
|---|---|
| Logo | Humanika (SVG, versión clara y oscura) |
| Nav | Ver sección 4 |
| Título principal | "Convierte el bienestar de tu equipo en resultados medibles." |
| Subtítulo | "Consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México." |
| CTA primario | "Solicita tu diagnóstico gratuito →" (botón sólido, color acento) |
| CTA secundario | "Ver soluciones" (botón outline o enlace) |
| Indicadores de confianza | "+2,000 evaluaciones · +700 colaboradores · Experiencia en manufactura" (badges o texto pequeño bajo CTAs) |
| Elemento visual | Composición abstracta corporativa (gradiente, formas geométricas, o ilustración data-driven; NO fotografía de personas genérica) |

**Criterios de diseño para el Hero:**
- Debe comunicar autoridad y modernidad, no calidez terapéutica.
- El título debe ser escaneable en 3 segundos.
- El CTA primario debe tener contraste suficiente para destacar sin competir con el título.

---

### Sección 1 — Problemas que Resolvemos

**Propósito:** Crear identificación inmediata. El visitante debe pensar "esto es exactamente lo que tenemos".

**Encabezado sugerido:**  
"¿Reconoces alguno de estos problemas en tu organización?"

**Tarjetas de problema (6–8 elementos):**

| Ícono | Título | Descripción breve |
|---|---|---|
| 🔄 | Alta rotación | Costo oculto que erosiona la productividad y el conocimiento institucional. |
| 📉 | Ausentismo recurrente | Indicador temprano de factores psicosociales no gestionados. |
| 🔥 | Burnout y agotamiento | Afecta el desempeño individual y el clima del equipo completo. |
| ⚖️ | Incumplimiento NOM-035 | Riesgo legal y reputacional con consecuencias ante la STPS. |
| 💬 | Conflictos internos | Deterioran la cultura y generan pasivos laborales. |
| 📋 | Sin datos de clima laboral | Decisiones de RH sin evidencia ni métricas confiables. |
| 😓 | Estrés laboral crónico | Impacta calidad, seguridad industrial y resultados. |
| 🚨 | Violencia o acoso laboral | Riesgo legal, humano y de reputación para la empresa. |

**Elemento de cierre de sección:**  
"Si identificas uno o más de estos escenarios, Humanika puede ayudarte."  
[CTA: Habla con un especialista]

---

### Sección 2 — Cómo Ayudamos

**Propósito:** Mostrar que existe una metodología clara y replicable. Diferenciarse de consultores improvisados.

**Encabezado:**  
"Metodología Humanika: de la evidencia a la acción"

**Tres etapas (layout horizontal en desktop, vertical en móvil):**

```
[01 DIAGNÓSTICO]          [02 INTERVENCIÓN]         [03 SEGUIMIENTO]
Identificamos los          Diseñamos e implementamos  Medimos el impacto
factores de riesgo         soluciones específicas     y ajustamos para
psicosocial con            para tu organización:      asegurar resultados
evidencia técnica.         capacitación, programas    sostenibles en el
Evaluaciones               de bienestar,              tiempo.
psicológicas,              atención psicológica,
encuestas NOM-035,         intervención grupal.
entrevistas.
```

**Nota de diseño:** Usar numeración prominente (01, 02, 03), línea conectora visual entre etapas, iconografía técnica (no ilustraciones infantiles).

**Subtexto bajo las 3 etapas:**  
"Cada intervención se diseña con base en los datos de tu organización. Sin soluciones genéricas."

---

### Sección 3 — Resultados

**Propósito:** Generar confianza con evidencia cuantificable. Credibilidad sin testimoniales individuales.

**Encabezado:**  
"Resultados que hablan por sí solos"

**Métricas principales (diseño tipo "stat cards" o contador animado):**

| Número | Descripción |
|---|---|
| +2,000 | Evaluaciones psicológicas aplicadas |
| +700 | Colaboradores atendidos directamente |
| +2,300 | Sesiones realizadas |
| 5+ | Años de experiencia en entornos corporativos |

**Industrias / contextos de experiencia (chips o badges):**
- Manufactura
- Sector corporativo multinacional
- Empresas medianas con certificaciones ISO
- Organizaciones con requerimientos NOM-035 activos

**Bloque de diferenciación (texto + ícono):**  
"Humanika no ofrece talleres de wellness genéricos. Cada intervención está sustentada en evaluación psicológica, metodología clínica y conocimiento del entorno laboral mexicano."

---

### Sección 4 — Diagnóstico Gratuito (CTA Final)

**Propósito:** Convertir. Esta es la sección más importante funcionalmente.

**Encabezado:**  
"Solicita tu diagnóstico organizacional gratuito"

**Subencabezado:**  
"En 30 minutos identificamos los principales factores de riesgo psicosocial en tu organización y te presentamos un plan de acción inicial."

**Formulario — campos requeridos:**

| Campo | Tipo | Requerido |
|---|---|---|
| Nombre completo | Texto | Sí |
| Puesto / Rol | Texto | Sí |
| Empresa | Texto | Sí |
| Número de colaboradores | Select (opciones: <50, 50–200, 200–500, +500) | Sí |
| Correo electrónico | Email | Sí |
| Teléfono / WhatsApp | Teléfono | Sí |
| Principal desafío | Textarea (250 caracteres max) | No |

**Beneficios listados junto al formulario:**
- ✓ Sin costo ni compromiso
- ✓ Sesión de 30 minutos con especialista
- ✓ Identificación de brechas NOM-035
- ✓ Plan de acción inicial personalizado
- ✓ Confidencialidad garantizada

**Texto de confianza bajo el botón:**  
"Tus datos están protegidos. No recibirás spam. Un especialista te contactará en menos de 24 horas hábiles."

**CTA del formulario:**  
"Solicitar diagnóstico gratuito →"

**Aviso legal:**  
Enlace a Aviso de Privacidad bajo el formulario (requerido por LFPDPPP).

---

### Sección 5 — Footer

**Contenido:**
- Logo + tagline: "Salud mental organizacional que genera resultados."
- Navegación secundaria (ver sección 4)
- Datos de contacto: email, teléfono/WhatsApp, LinkedIn
- Certificaciones/sellos si aplica (EC0217.01 CONOCER u otros)
- Copyright + enlaces legales
- Indicador de ubicación: "Monterrey, N.L. · Servicio nacional"

---

## 6. Requerimientos Funcionales

### RF-01 — Formulario de diagnóstico gratuito
- Validación en cliente (campos requeridos, formato email, formato teléfono).
- Validación en servidor antes de almacenamiento.
- Envío de notificación por email a Humanika (dirección configurable).
- Envío de email de confirmación al prospecto.
- Redirección a página `/gracias` con mensaje de siguiente paso y opción de agendar.
- Almacenamiento de registros en base de datos (Airtable vía API como Fase 1).
- Protección anti-spam: honeypot field + rate limiting.

### RF-02 — Navegación
- Header sticky con comportamiento de transparencia en hero y sólido al hacer scroll.
- Megamenú en Soluciones con subpáginas.
- Menú móvil (hamburguesa) con animación suave.
- CTA "Diagnóstico Gratuito" siempre visible en header.

### RF-03 — Animaciones y micro-interacciones
- Contadores animados en Sección 3 (activados al entrar al viewport).
- Scroll reveal suave en todas las secciones.
- Hover states en tarjetas de problemas y etapas de metodología.

### RF-04 — SEO técnico
- Meta tags configurables por página (title, description, OG tags).
- Estructura semántica HTML5 correcta (h1, h2, h3 jerarquía).
- Schema markup para Organization y LocalBusiness.
- Sitemap XML automático.
- robots.txt configurado.
- Core Web Vitals optimizados (LCP < 2.5s, CLS < 0.1, FID < 100ms).

### RF-05 — Analytics y tracking
- Google Analytics 4 integrado.
- Eventos de conversión trackeados: formulario enviado, click en CTAs, tiempo en sección diagnóstico.
- Google Tag Manager como contenedor (permite agregar pixels sin deploy).

### RF-06 — Página /gracias
- Mensaje de confirmación con expectativa clara ("Te contactaremos en 24 horas hábiles").
- Botón para agendar llamada directo (Calendly embed o link, Fase 2).
- Links a LinkedIn y recursos relevantes.

---

## 7. Requerimientos No Funcionales

### RNF-01 — Performance
- Lighthouse score ≥ 90 en Performance, Accessibility, Best Practices, SEO.
- Imágenes en formato WebP/AVIF con lazy loading.
- Fuentes web con font-display: swap.
- CSS y JS minificados y con code splitting.

### RNF-02 — Responsividad
- Mobile-first design.
- Breakpoints: 375px, 768px, 1024px, 1440px.
- Formularios y CTAs completamente funcionales en móvil.
- Touch targets ≥ 44px.

### RNF-03 — Accesibilidad
- WCAG 2.1 nivel AA.
- Contraste de color mínimo 4.5:1 para texto.
- Atributos alt en todas las imágenes.
- Navegación por teclado funcional.
- ARIA labels en elementos interactivos.

### RNF-04 — Seguridad
- HTTPS obligatorio (certificado SSL/TLS).
- Headers de seguridad: CSP, X-Frame-Options, HSTS.
- Sanitización de inputs del formulario.
- CAPTCHA o protección anti-bot en formularios.

### RNF-05 — Mantenibilidad
- Código documentado con comentarios en secciones clave.
- Variables CSS centralizadas (design tokens).
- Componentes reutilizables.
- README con instrucciones de deployment y configuración.

### RNF-06 — Disponibilidad
- Hosting con SLA ≥ 99.9% de uptime.
- Backup automático semanal.
- CDN para assets estáticos.

---

## 8. Experiencia de Usuario Esperada

### Flujo de usuario primario (visitante frío → prospecto)

```
Google Search ("consultoría NOM-035 Monterrey")
    ↓
Aterrizaje en Home (hero)
    ↓
Scroll → Sección problemas (identificación)
    ↓
Scroll → Metodología (confianza en proceso)
    ↓
Scroll → Resultados (credibilidad)
    ↓
Scroll → Formulario diagnóstico (conversión)
    ↓
Envío → Página /gracias
    ↓
Email de confirmación → Llamada con especialista
```

### Flujo de usuario secundario (visitante directo → exploración)

```
Acceso directo o referido
    ↓
Hero → CTA "Ver soluciones"
    ↓
Página /soluciones o subpágina específica
    ↓
CTA "Solicita diagnóstico" en subpágina
    ↓
Formulario → Conversión
```

### Principios de UX

- **Claridad ante todo:** Un visitante que llega a la Home debe entender en 5 segundos qué hace Humanika y para quién es.
- **Fricción mínima:** El formulario debe sentirse rápido. Campos justos, sin campos innecesarios.
- **Confianza progresiva:** Cada sección suma un argumento. El visitante no necesita leer todo para decidir.
- **CTAs estratégicos:** Al menos un CTA claro en cada sección. Sin ambigüedad sobre el siguiente paso.
- **Tono B2B:** Lenguaje ejecutivo, directo, sin jerga clínica ni lenguaje terapéutico suavizado.

---

## 9. Estrategia de Conversión

### Arquitectura de conversión

**Nivel 1 — Micro-conversiones (engagement):**
- Click en "Ver soluciones"
- Scroll hasta la sección de diagnóstico
- Hover en tarjetas de problemas
- Click en LinkedIn

**Nivel 2 — Conversión principal:**
- Envío de formulario de diagnóstico gratuito

**Nivel 3 — Conversión secundaria (Fase 2):**
- Agendamiento de llamada vía Calendly
- Descarga de guía NOM-035

### Elementos de persuasión

| Elemento | Ubicación | Función psicológica |
|---|---|---|
| Indicadores numéricos | Hero, Sección 3 | Prueba social cuantitativa |
| Lista de problemas | Sección 1 | Identificación / reconocimiento |
| Metodología 3 pasos | Sección 2 | Reducción de incertidumbre |
| "Sin compromiso" | Formulario | Reducción de riesgo percibido |
| "24 horas" | Formulario | Urgencia + expectativa |
| "Confidencialidad" | Formulario | Seguridad y confianza |

### Optimización continua (post-lanzamiento)

- A/B testing en título del Hero (Fase 2).
- Heatmaps con Hotjar o Microsoft Clarity (gratuito).
- Revisión mensual de tasa de conversión del formulario.
- Optimización de keywords basada en Search Console.

---

## 10. Diseño Visual Esperado

### Identidad de marca (extraída del branding existente)

| Elemento | Especificación |
|---|---|
| Color primario | Azul corporativo Humanika (#1a5cb8 aproximado — validar con brand assets) |
| Color acento | A definir; sugerencia: verde-azulado (#00C2A0) o blanco puro para CTAs |
| Fondo base | Blanco o gris muy claro (#F8F9FB) |
| Texto principal | Casi negro (#0F1923) |
| Texto secundario | Gris medio (#5A6478) |

### Tipografía

| Uso | Fuente sugerida | Alternativa |
|---|---|---|
| Headlines | Sora, DM Sans Bold, o Manrope | Plus Jakarta Sans |
| Body | DM Sans Regular | Nunito Sans |
| Datos/números | Tabular variant del headline font | — |

*Criterio: moderna, limpia, técnica. Evitar fuentes con connotación clínica o serif tradicional.*

### Estilo visual general

- **Referentes:** Stripe (precisión técnica), Notion (claridad), HubSpot (conversión B2B), Deloitte Digital (autoridad corporativa).
- **Estilo:** Minimalismo corporativo con acentos de color estratégicos. Sin decoración superflua.
- **Iconografía:** Line icons consistentes (Lucide, Phosphor o Heroicons). Sin emojis en el UI.
- **Fotografía/Ilustración:** Preferir composiciones abstractas, datos visualizados, o gráficas. Evitar stock photography genérico de "personas en oficina sonriendo".
- **Espaciado:** Generoso. El blanco es un elemento de diseño, no un error.
- **Sombras y bordes:** Sutiles. Elevación mínima en tarjetas. Sin bordes redondeados extremos (evitar apariencia de app de wellness).

### Sistema de componentes

- **Botón primario:** Fondo azul sólido, texto blanco, sin borde, border-radius 6px.
- **Botón secundario:** Outline azul, fondo transparente.
- **Tarjeta de problema:** Borde izquierdo azul, fondo blanco, sombra mínima.
- **Stat card:** Número grande en azul, descripción en gris, sin borde.
- **Badge de industria:** Pill con fondo azul claro, texto azul oscuro.

---

## 11. Roadmap de Futuras Funcionalidades

### Fase 1 — MVP (semanas 1–4)
- ✅ Home con todas las secciones descritas
- ✅ Formulario de diagnóstico conectado a Airtable
- ✅ Emails de confirmación automáticos
- ✅ SEO técnico básico
- ✅ Analytics configurado
- ✅ Páginas: /nosotros, /contacto, /privacidad
- ✅ Página /gracias post-formulario
- ✅ Estructura de URLs para soluciones (con contenido placeholder)

### Fase 2 — Contenido y conversión avanzada (meses 2–3)
- Blog técnico con artículos NOM-035, riesgos psicosociales, liderazgo
- Guía descargable "Checklist NOM-035" (lead magnet gated)
- Integración Calendly para agendamiento directo
- Casos de éxito (3–5 casos anonimizados con métricas)
- Subpáginas de soluciones completas
- A/B testing en Hero

### Fase 3 — Plataforma y automatización (meses 4–6)
- CRM integrado (HubSpot o Pipedrive)
- Diagnóstico NOM-035 automatizado (formulario inteligente con resultados parciales instantáneos)
- Dashboard de cliente con acceso a informes
- Base de datos de prospectos con scoring
- Formularios inteligentes con lógica condicional

### Fase 4 — Plataforma EPSI (mes 6+)
- Área privada para clientes con acceso a plataforma de evaluaciones
- Integración con sistema EPSI existente
- Reportería automática para clientes corporativos
- Panel de administración para Humanika

---

## 12. Criterios de Aceptación

### CA-01 — Funcionalidad core

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-01-01 | El formulario envía correctamente | El prospecto recibe email de confirmación y el registro aparece en Airtable |
| CA-01-02 | Validación de formulario | No se puede enviar con campos requeridos vacíos o mal formateados |
| CA-01-03 | Redirección post-formulario | Usuario llega a /gracias tras envío exitoso |
| CA-01-04 | Navegación funcional | Todos los links internos funcionan sin errores 404 |
| CA-01-05 | Header sticky | El header se mantiene visible al hacer scroll en todas las páginas |

### CA-02 — Performance

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-02-01 | Lighthouse Performance | Score ≥ 90 en mobile y desktop |
| CA-02-02 | LCP (Largest Contentful Paint) | < 2.5 segundos |
| CA-02-03 | CLS (Cumulative Layout Shift) | < 0.1 |
| CA-02-04 | Carga en 3G | Página funcional visible en < 5 segundos |

### CA-03 — Responsividad

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-03-01 | Móvil 375px | Ningún elemento desborda horizontalmente |
| CA-03-02 | Formulario en móvil | Campos y botón completamente funcionales |
| CA-03-03 | Menú móvil | Abre, navega y cierra sin errores |
| CA-03-04 | Tablet 768px | Layout adapta correctamente |

### CA-04 — SEO y analytics

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-04-01 | Meta tags | Cada página tiene title y description únicos |
| CA-04-02 | GA4 | Evento de conversión dispara al enviar formulario |
| CA-04-03 | Lighthouse SEO | Score ≥ 95 |
| CA-04-04 | Schema markup | Válido según Google Rich Results Test |

### CA-05 — Diseño y UX

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-05-01 | Hero legible | Título completo legible sin scroll en viewport 1280px |
| CA-05-02 | CTAs visibles | Contraste de botón primario ≥ 4.5:1 |
| CA-05-03 | Animaciones | No causan layout shift; respetan prefers-reduced-motion |
| CA-05-04 | Consistencia visual | Fuentes, colores y espaciados consistentes en toda la Home |

### CA-06 — Contenido

| ID | Criterio | Condición de éxito |
|---|---|---|
| CA-06-01 | Propuesta de valor | Visible sin scroll en hero desktop y móvil |
| CA-06-02 | Métricas | Las 4 estadísticas de Sección 3 son correctas y visibles |
| CA-06-03 | Aviso de privacidad | Link funcional desde formulario y footer |
| CA-06-04 | Datos de contacto | Email, teléfono y LinkedIn accesibles desde footer y /contacto |

---

## Apéndice A — Stack Técnico Recomendado

| Capa | Tecnología sugerida | Justificación |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SEO, performance, escalabilidad para Fases 2–4 |
| Styling | Tailwind CSS | Velocidad de desarrollo, consistencia |
| Formularios | React Hook Form + Zod | Validación robusta, UX de formulario |
| Base de datos inicial | Airtable vía API | Sin infraestructura, bajo costo, visual para Humanika |
| Email | Resend o SendGrid | Transaccional confiable |
| Hosting | Vercel | Deploy automático, edge CDN, analytics básico |
| Analytics | Google Analytics 4 + GTM | Estándar industria |
| CMS (Fase 2) | Sanity.io o Contentful | Headless, permite edición de contenido sin código |

---

## Apéndice B — Tono de Voz y Estilo Editorial

**Lenguaje:** Español formal-ejecutivo. Sin tuteo. Sin jerga clínica. Sin lenguaje motivacional vacío.

**Lo que Humanika dice:**
- "Identificamos factores de riesgo con metodología estructurada."
- "Resultados medibles en clima laboral y rotación."
- "Cumplimiento NOM-035 con evidencia."

**Lo que Humanika NO dice:**
- "Transformamos vidas" (lenguaje de coaching genérico)
- "Creamos espacios de bienestar" (demasiado suave)
- "Acompañamos tu viaje" (lenguaje terapéutico inapropiado para B2B)

**Fórmula de copy:** Problema específico + Solución concreta + Resultado medible.

---

*Documento generado para uso interno del equipo de desarrollo. Versión sujeta a revisión con cliente antes de inicio de sprint.*
