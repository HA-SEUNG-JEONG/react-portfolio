export const implementClasName = "text-xl font-bold mb-2";
export const projectContainerClassName =
  "max-w-lg mb-16 ml-4 leading-[1.8] flex flex-col font-medium";
export const imgClassName = "w-[190px] h-[170px] mr-4";

export const commonProps = (amount: number) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once: false, amount },
});
