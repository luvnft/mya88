import { Card, Input, Image, Button, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { EyeFilledIcon, EyeSlashFilledIcon } from ".";

interface AuthFormProps {
  onSubmit: (passphrase: string) => void;
}

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [passphrase, setPassphrase] = useState<string>("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-[70vh] justify-center items-center">
      <motion.div
        className="flex h-fit justify-center items-center backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className="border-none bg-default-100/50 max-w-[610px] p-4 flex items-center flex-col gap-4"
          shadow="lg"
        >
          <Image
            src={"/greeting.webp"}
            alt="banner"
            radius="full"
            className="object-cover object-center pointer-events-none select-none ring-2 ring-offset-2 ring-offset-default-100 ring-pink-500"
          />
          <div className="text-sm uppercase">📺 Subscribe to <a href="https://discord.com/servers/arvrtise-1034757895268618260"><b>Arvrtise</b></a>, <a href="https://discord.com/servers/atl5d-1244450286337003520"><b>ATL5D</b></a>, <a href="https://discord.com/servers/cre-1163344441436819497"><b>CRE</b></a>, <a href="https://discord.com/servers/hair-1188100125705375806 "><b>HAIR</b></a>, <a href="https://discord.com/servers/healxyz-1165931081564946443 "><b>HealXYZ</b></a>, <a href="https://discord.com/servers/luv-nft-910051231437819914"><b>NFTV</b></a> Discord for the key to watch scheduled LIVE events on YouTube #ytlive channel 24/7✨</div>
          <div className="flex gap-2">
            <Input
              value={passphrase}
              onValueChange={setPassphrase}
              radius="full"
              endContent={
                <button
                  className="outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Button
              isIconOnly
              aria-label="passphrase"
              radius="full"
              className="bg-pink-500/80"
              onClick={async () => {
                setIsLoading(true);
                await onSubmit(passphrase);
                setIsLoading(false);
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner color="default" size="sm" />
              ) : (
                <Image
                  src={"/key.svg"}
                  alt="key-icon"
                  radius="full"
                  height={28}
                  width={28}
                  className="object-cover object-center pointer-events-none select-none"
                />
              )}
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
