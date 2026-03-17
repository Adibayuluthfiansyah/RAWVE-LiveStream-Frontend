import { Tv, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Absolute Freedom",
    description:
      "No arbitrary bans. No restrictive content policies. Stream what you want, how you want, to your audience.",
  },
  {
    icon: DollarSign,
    title: "95/5 Split",
    description:
      "Keep more of what you earn. Our industry-leading revenue model ensures creators are rewarded fairly for their hard work.",
  },
  {
    icon: Users,
    title: "Pure Engagement",
    description:
      "Direct connection with your fans. No algorithms burying your content or suppressing your community growth.",
  },
];

export default function WhyCreatorsChoose() {
  return (
    <section className="relative py-24 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Creators Choose RAWVE
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Built for the next generation of streamers who demand more from
            their platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-linear-to-b from-[#1A1A1F] to-[#0F0F13] border border-gray-800 hover:border-[#FF3A3A]/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 w-12 h-12 rounded-lg bg-[#FF3A3A]/10 flex items-center justify-center group-hover:bg-[#FF3A3A]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#FF3A3A]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
