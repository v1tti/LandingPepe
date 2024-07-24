import {
  Footer,
  Header,
  MainDescription,
  NewCharacter,
  NewEvent,
} from "../../components";
export function Home() {
  return (
    <div className="h-dvh flex flex-col justify-between">
      <div>
        <Header></Header>
        <div className="container flex flex-col gap-y-3 max-w-screen-lg">
          <MainDescription></MainDescription>
          <NewEvent></NewEvent>
          <NewCharacter></NewCharacter>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
