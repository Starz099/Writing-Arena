export default function Features() {
  const items = [
    { title: "Daily Topics", desc: "Fresh prompts every day to fuel your creativity." },
    { title: "AI-Powered Feedback", desc: "Grammar, structure, and originality scoring." },
    { title: "Leaderboard & XP", desc: "Grind your way to the top by writing consistently." },
  ];

  return (
    <section className="py-16 px-8 bg-black">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Features</h3>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="p-4 border rounded shadow hover:shadow-lg transition">
            <h4 className="text-lg text-gray-100 font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-100">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
