import Image from "next/image";

function Header() {
  return (
    <header className="h-full w-full">
      <div className="flex items-center gap-5">
        <div className="size-[80px] overflow-hidden rounded-full">
          <Image
            src={"/user/arpit.png"}
            width={80}
            height={80}
            alt="User profile picture"
            sizes="100%"
            priority
          />
        </div>
        <div className="flex flex-col text-lg">
          <h2 className="font-medium">Arpit Yadav</h2>
          <h3 className="text-neutral-600 dark:text-neutral-400">
            Frontend Developer
          </h3>
        </div>
      </div>
    </header>
  );
}
export default Header;
