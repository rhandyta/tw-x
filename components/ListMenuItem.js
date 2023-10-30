import { UserContext } from "@/context/user-context";
import { linkNavigation } from "@/utils/constant";
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import LoadingProgress from "./LoadingProgress";

function ListMenuItem({ open, handleDrawerClose, router }) {
  const [isClient, setIsClient] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingProgress />
      </Box>
    );

  return (
    <>
      {linkNavigation
        .filter((item) => {
          if (
            item.role === "administrator" &&
            user.currentUser?.uid === process.env.NEXT_PUBLIC_UID_AUTHORIZED &&
            user.currentUser?.email === process.env.NEXT_PUBLIC_EMAIL_AUTHORIZED ||
            item.role === "guest"
          ) {
            return item;
          }
          if (
            item.role === "guest" &&
            user.currentUser?.uid !== process.env.NEXT_PUBLIC_UID_AUTHORIZED &&
            user.currentUser?.email !== process.env.NEXT_PUBLIC_EMAIL_AUTHORIZED
          ) {
            return item;
          }
        })
        .map((item, index) => (
          <Link
            title={item.title}
            href={item.link}
            style={{ color: "inherit", textDecoration: "none" }}
            key={item.title}
            onClick={() => handleDrawerClose()}
          >
            <ListItem
              key={item.title}
              disablePadding
              sx={{
                display: "block",
                backgroundColor: router === item.link ? grey[900] : "",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Link>
        ))}
    </>
  );
}

export default ListMenuItem;
