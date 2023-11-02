import { Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import ContentWork from "@/components/pages/works/ContentWork";
function Page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        Work
      </Typography>
      <CustomContainer>
        <ContentWork/>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default Page;
