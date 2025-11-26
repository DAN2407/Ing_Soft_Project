
# 🧪 Plan de Pruebas – Plataforma CONTRATASV
![Static Badge](https://img.shields.io/badge/Version-1.5-green) ![Static Badge](https://img.shields.io/badge/Estado-Activo-Green) ![Static Badge](https://img.shields.io/badge/Covertura-75%25-red)
 

---

## 📌 Información General
### 🎯 Objetivo
Validar que la plataforma CONTRATASV cumpla con los requisitos funcionales y no funcionales definidos en las historias de usuario, asegurando calidad antes del despliegue.

### 📈 Alcance
Este plan cubre:
- Pruebas funcionales: UI, navegación, formularios, perfil.
- Pruebas no funcionales: rendimiento básico y usabilidad.

### 🚀 Estrategia de Pruebas
- **Tipos:** Funcionales y No Funcionales.
- **Niveles:** Unitarias, Integración, Sistema y Aceptación.
- **Herramientas sugeridas:** Selenium, Postman, Lighthouse.

---

## 🔐 Casos de Prueba por Historia de Usuario

### **HU-1: Implementación de nuevo diseño visual**
✅ **CP-001: Verificación de diseño responsive**
- **Tipo:** Funcional  
- **Prioridad:** Alta  
- **Precondiciones:** Usuario accede desde móvil y escritorio.  
- **Pasos:**
  1. Abrir la plataforma en Chrome (desktop).
  2. Abrir la plataforma en móvil (modo responsive).
  3. Verificar que no haya elementos rotos.
- **Resultado esperado:**  
  ✓ Layout adaptado en ambos dispositivos.  
  ✓ Menús y botones visibles y funcionales.

---

### **HU-3: Navegación por rol de usuario**
✅ **CP-002: Menú dinámico por rol**
- **Tipo:** Funcional  
- **Prioridad:** Alta  
- **Precondiciones:** Usuario autenticado como cliente y proveedor.  
- **Pasos:**
  1. Iniciar sesión como cliente.
  2. Verificar opciones: búsqueda y contratación.
  3. Iniciar sesión como proveedor.
  4. Verificar opciones: gestión de servicios.
- **Resultado esperado:**  
  ✓ Menú cambia según rol.  
  ✓ Transición fluida entre vistas.

---

### **HU-7: Formularios con validación en tiempo real**
✅ **CP-003: Validación instantánea**
- **Tipo:** Funcional  
- **Prioridad:** Alta  
- **Precondiciones:** Formulario activo.  
- **Pasos:**
  1. Ingresar datos inválidos (correo sin @).
  2. Verificar mensaje de error inmediato.
- **Resultado esperado:**  
  ✓ Campo marcado en rojo.  
  ✓ Mensaje claro y específico.

---

### **HU-10: Sistema de ratings**
✅ **CP-004: Cálculo automático de rating**
- **Tipo:** Funcional  
- **Prioridad:** Media  
- **Precondiciones:** Proveedor con valoraciones previas.  
- **Pasos:**
  1. Agregar nueva valoración.
  2. Verificar actualización del promedio.
- **Resultado esperado:**  
  ✓ Rating recalculado y visible.

---

## ⚡ Pruebas No Funcionales
✅ **CP-005: Rendimiento de carga**
- **Tipo:** No Funcional (Rendimiento)  
- **Prioridad:** Media  
- **Pasos:**
  1. Medir tiempo de carga en móvil y escritorio.
  2. Simular conexión lenta.
- **Resultado esperado:**  
  ✓ Página principal carga en < 3 segundos.  
  ✓ No hay errores de timeout.

✅ **CP-006: Usabilidad básica**
- **Tipo:** No Funcional (Usabilidad)  
- **Prioridad:** Baja  
- **Pasos:**
  1. Pedir a 3 usuarios nuevos que encuentren “Contratar servicio”.
  2. Medir tiempo y recopilar feedback.
- **Resultado esperado:**  
  ✓ Tarea completada en < 30 segundos.  
  ✓ Satisfacción > 4/5.

---

## 📅 Cronograma (3 personas)
| Semana | Actividad |
|--------|-----------|
| 1 | Configuración ambiente y datos de prueba |
| 2 | Pruebas de UI y navegación |
| 3 | Pruebas de formularios y perfil |
| 4 | Pruebas no funcionales y cierre |

---

## ⚠ Riesgos y Mitigación
| Riesgo | Impacto | Mitigación |
|--------|---------|-----------|
| Cambios en requisitos | Alto | Revisiones iterativas |
| Datos insuficientes | Medio | Generar datos ficticios |
| Ambiente inestable | Bajo | Ambiente de respaldo |

---

## ✅ Criterios de Salida
- 100% de casos ejecutados.
- 0 defectos críticos.
- Documentación completa.

---

**Encargados:**  
- Danny Argueta  
- Daniel Juárez  
- Nelson Díaz  
