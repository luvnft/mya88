import { useMemo } from "react";
import { Image } from "@nextui-org/react";
import pack from "../../package.json";

export const AuthorSection = () => {
  const appVersion = useMemo(() => {
    return pack.version;
  }, []);
  return (
    <div className="flex self-end mt-2 relative select-none">
      <div className="flex flex-col items-center justify-center text-xxs leading-none">
        YTLIVE {appVersion ?? "unknown version"}
        <div>Youtube live stream chat message viewer</div>
        <div>WEB5</div>
      </div>
      <a
        className="flex place-items-center p-2"
        href="https://github.com/sawaYch/mya88"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="rounded-full" src="/author.jpg" alt="author" />
      </a>
    </div>
  );
};
