import Image from "next/image";

function EducationCard() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full gap-5">
        <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white">
          <Image
            src={"/university/amity.png"}
            height={32}
            width={32}
            alt="university logo"
            sizes="100%"
            priority
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-lg font-semibold">Amity University</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              2017 - 2020
            </p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Bachelor of Science in Information technology
          </p>
        </div>
      </div>
    </div>
  );
}
export default EducationCard;
