import { Intro } from "./components/Intro";
import { MainLayout } from "./components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
    </MainLayout>
  );
}
