const features = [
  {
    title: "Never miss a call again",
    desc: "Yama AI answers every inbound call, schedules appointments, and handles patient inquiries 24/7"
  },
  {
    title: "Seamless calendar integration",
    desc: "Appointments sync directly with your clinic’s system, sending automatic confirmations and reminders"
  },
  {
    title: "Reduce overhead, not service",
    desc: "Cut receptionist workload without sacrificing quality patient interactions"
  },
  {
    title: "HIPAA compliant & secure",
    desc: "Built with privacy and compliance in mind to protect patient data"
  },
  {
    title: "Fill no-show instantly",
    desc: "Yama AI detects last-minute cancellations and automatically reaches out to fill gaps in your schedule"
  }
]

export default function Features() {
  return (
    <section className="features">
        <div className="container">
      {features.map(f => (
        <div key={f.title} className="feature">
          <h3 className="font-semibold text-lg">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
      </div>
    </section>
  )
}
