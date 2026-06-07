import type { Metadata } from "next";
import SolucionTemplate from "@/components/SolucionTemplate";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "NOM-035 STPS",
  description:
    "Cumplimiento de NOM-035-STPS-2018: diagnóstico, guías de referencia, políticas y plan de acción para empresas en México. Evita sanciones y fortalece tu cultura organizacional.",
};

export default function Nom035Page() {
  return (
    <SolucionTemplate
      badge="NOM-035-STPS-2018"
      icon={FileCheck}
      title="Cumplimiento NOM-035 STPS"
      description="Acompañamos a tu empresa en el cumplimiento integral de la NOM-035-STPS-2018, desde el diagnóstico de factores de riesgo psicosocial hasta la implementación de políticas y planes de acción documentados."
      deliverables={[
        "Diagnóstico inicial de factores de riesgo psicosocial conforme a los Anexos de la norma",
        "Aplicación de las Guías de Referencia I, II y III de la NOM-035",
        "Diseño y documentación de la política de prevención de riesgos psicosociales",
        "Elaboración del plan de acción con responsables y tiempos definidos",
        "Capacitación a jefes y supervisores sobre la norma y su aplicación",
        "Informe técnico para respaldo ante la STPS",
        "Acompañamiento en procesos de inspección",
        "Evaluación de seguimiento (6 y 12 meses)",
      ]}
      processSteps={[
        {
          title: "Reunión de alineación",
          description: "Conocemos tu organización, estructura, sectores y principales áreas de riesgo.",
        },
        {
          title: "Aplicación de diagnóstico",
          description: "Aplicamos las guías de referencia de la NOM-035 a toda la población o muestras representativas.",
        },
        {
          title: "Análisis e informe",
          description: "Analizamos los resultados, identificamos brechas y elaboramos el informe técnico.",
        },
        {
          title: "Diseño del plan de acción",
          description: "Definimos medidas de intervención priorizadas, responsables y tiempos.",
        },
        {
          title: "Implementación y capacitación",
          description: "Ejecutamos las acciones, capacitamos a líderes y documentamos el proceso.",
        },
        {
          title: "Seguimiento y cierre",
          description: "Medimos el impacto de las intervenciones y actualizamos la documentación.",
        },
      ]}
    />
  );
}
