import Transition from "../../transition";

export default function worksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Transition>{children}</Transition>
    </section>
  );
}
