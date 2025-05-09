import { Button } from "./button";

const HomeButton = () => {
  return (
    <Button asChild>
      <a href="/">Take me back home</a>
    </Button>
  );
};

export default HomeButton;
