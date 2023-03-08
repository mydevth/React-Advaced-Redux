import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "./App.css";

function TButton() {
  return (
    <div>
      <Container fixed sx={{ backgroundColor: "grey" }}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="success" size="large">
            Hello MUI
          </Button>
          <Button variant="contained" color="success" size="large">
            Hello MUI 2
          </Button>
          <Button variant="contained" color="success" size="large">
            Hello MUI 3
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
          >
            Click me
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default TButton;
