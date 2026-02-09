/**
 * UTILIDAD DE RASTREO (UTM)
 * ------------------------------------------------
 * Objetivo: Capturar quién envió al usuario a esta infografía y 
 * pasar ese dato limpiamente a la Landing Page de Alquimistas.
 * 
 * Flujo:
 * 1. Infografía (Recibe ?utmsource=Lilo) 
 *    -> Detecta "Lilo"
 * 2. Botón CTA (Genera link a alquimistas.gnius.club?utm_source=Lilo)
 * 3. Landing Page (Recibe ?utm_source=Lilo)
 *    -> Tu script Alpine detecta esto y configura el botón de Stripe.
 */
export const generarLinkConUTM = (urlBase: string): string => {
  // Verificación de seguridad para entornos sin ventana (SSR)
  if (typeof window === 'undefined') return urlBase;

  try {
    const paramsActuales = new URLSearchParams(window.location.search);

    // 1. DETECCIÓN FLEXIBLE DEL VENDEDOR
    // Aceptamos variantes comunes para no perder la venta por un error de dedo
    const source = paramsActuales.get('utm_source') || 
                   paramsActuales.get('utmsource') || // Error común
                   paramsActuales.get('ref');         // Común en afiliados

    // Si no hay vendedor, devolvemos la URL base original sin tocarla
    if (!source) return urlBase;

    // 2. CONSTRUCCIÓN LIMPIA DE LA URL DE DESTINO
    // Usamos el constructor URL para manejar correctamente si urlBase ya tiene params
    const urlDestino = new URL(urlBase);

    // Estandarizamos SIEMPRE a 'utm_source' para la destination
    urlDestino.searchParams.set('utm_source', source);

    // (Opcional) Preservamos campaña y medio si existen en la URL actual
    const otrosParams = ['utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    otrosParams.forEach(key => {
        const val = paramsActuales.get(key);
        if (val) urlDestino.searchParams.set(key, val);
    });

    return urlDestino.toString();

  } catch (e) {
    console.error("Error generando link UTM:", e);
    return urlBase;
  }
};