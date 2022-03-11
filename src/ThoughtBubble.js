import React, { useEffect } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

const ThoughtBubble = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const showBubble = () => {
      enqueueSnackbar(props.children, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: null,
      });
    };
    let timer1 = setTimeout(() => showBubble(), 1000);
    return () => {
      clearTimeout(timer1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThoughtBubble>{props.children}</ThoughtBubble>
    </SnackbarProvider>
  );
}
