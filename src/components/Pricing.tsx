import { useState } from "react"

const plans = [
  {
    name: "Basic",
    monthly: 500,
    features: ["9-5 agent", "Manage inbound calls", "Outbound calls/reminders", "After hours/busy times"],
    featured: false
  },
  {
    name: "Premium",
    monthly: 1000,
    features: ["24/7 agent", "Manage inbound calls", "Outbound calls/reminders", "Automation scheduling"],
    featured: true
  },
  {
    name: "Elite",
    monthly: 1500,
    features: ["Voice mimicking", "Handle limitless calls", "List item", "List item"],
    featured: false
  }
]

export default function Pricing() {
  let [mode, setMode] = useState("monthly")

  return (
    <section id="pricing" className="pricing">
      <div className="container mx-auto px-6 text-center">
        <div className="toggle">
          {["monthly","yearly"].map(m => (
            <button
              key={m}
              onClick={()=>setMode(m)}
              className={`px-4 py-1 rounded-full ${
                mode===m ? "bg-white text-purple-600" : "text-white/80"
              }`}
            >{m.charAt(0).toUpperCase()+m.slice(1)}</button>
          ))}
        </div>

        <div className="plans">
          {plans.map(p => {
            const price = mode==="yearly"
              ? (p.monthly * 12 * 0.8).toLocaleString()
              : p.monthly.toLocaleString()

            return (
              <div
                key={p.name}
                className={`plan ${
                  p.featured ? "bg-gray-800" : "bg-white/20"
                }`}
              >
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="text-4xl font-bold">
                  ${price}
                  <span className="text-lg font-medium">/{mode==="monthly" ? "mo" : "yr"}</span>
                </p>
                <ul className="space-y-2 text-left">
                  {p.features.map(f => (
                    <li key={f} className="before:content-['•'] before:text-xl before:mr-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="btn-plan">
                  Start now
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
