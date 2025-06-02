
import { Card, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function NeuroCarePitch() {
  return (
    <div className="p-8 space-y-8 text-slate-800 min-h-screen" style={{ backgroundColor: "#0f2f32" }}>
      <section className="text-center">
        <h1 className="text-4xl font-bold text-cyan-200">NeuroCare</h1>
        <p className="text-lg text-cyan-100 mt-2">Un assistant numérique pour les patients post-AVC et leurs aidants</p>
      </section>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">À qui s’adresse NeuroCare ?</h2>
          <ul className="list-disc list-inside text-base">
            <li><strong>Claire, 56 ans</strong> – Aidante de son mari post-AVC</li>
            <li><strong>Jean, 67 ans</strong> – Patient autonome, vit seul</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Ce que fait NeuroCare</h2>
          <ul className="list-disc list-inside">
            <li><strong>Checklist “Ma journée”</strong> : médicaments, rendez-vous, conseil du jour</li>
            <li><strong>Rappels personnalisables</strong></li>
            <li><strong>Fiches pratiques</strong></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Pourquoi c’est le bon moment</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[{ name: '2020', avc: 120 }, { name: '2025', avc: 160 }, { name: '2030', avc: 200 }]}>
              <XAxis dataKey="name" stroke="#155e75" />
              <YAxis stroke="#155e75" />
              <Tooltip />
              <Bar dataKey="avc" fill="#22d3ee" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Modèle économique</h2>
          <ul className="list-disc list-inside">
            <li><strong>Gratuit pour les patients et aidants</strong></li>
            <li><strong>Financement B2B2C</strong> : ARS, EHPAD, hôpitaux, mutuelles, fondations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Roadmap de développement</h2>
          <ul className="list-disc list-inside">
            <li><strong>0–30 jours</strong> : maquettes, retours terrain, finalisation MVP</li>
            <li><strong>30–60 jours</strong> : prototype no-code, premiers tests utilisateurs</li>
            <li><strong>60–90 jours</strong> : lancement pilote + partenaires institutionnels</li>
          </ul>
        </CardContent>
      </Card>

      <section className="text-center text-cyan-100">
        <p className="mt-6 text-lg">Un projet simple, humain, utile. Et prêt à être testé sur le terrain.</p>
      </section>
    </div>
  )
}
