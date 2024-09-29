import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants";

function Skill() {
  return (
    <section className="w-full">
      <h4 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-[#E6E6E6]">
        Skills
      </h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="flex items-center gap-1 rounded-md bg-[#F5F5F5] px-2 py-2 text-xs font-medium text-[#525252] shadow-md transition-transform duration-300 hover:shadow-lg dark:bg-[#18181B] dark:text-[#E5E5E5]"
          >
            <span className={`text-sm`} style={{ color: skill.color }}>
              {<skill.icon />}
            </span>
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default Skill;
