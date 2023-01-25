//import { Wrapper, Paragraph, Heading } from "../../styled/StyledComponents";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import {
  Wrapper,
  Paragraph,
  Heading,
  StyledDrawerContainer,

} from "../styled/StyledComponents";

export default function CustomDrawer(props) {
  return (
    <StyledDrawerContainer>
      <DrawerContentScrollView {...props} >

          <DrawerItemList {...props} />

      </DrawerContentScrollView>
    </StyledDrawerContainer>
  );
}

