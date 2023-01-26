import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyledDrawerContainer } from "../styled/styled.components";

export default function CustomDrawer(props: any) {
  return (
    <StyledDrawerContainer>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </StyledDrawerContainer>
  );
}
