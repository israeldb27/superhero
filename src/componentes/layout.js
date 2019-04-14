

export const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    media: {
      paddingTop: "76.25%" // 16:9
    },
    table: {
      minWidth: 2500,
      spacing: 2
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },

    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4
      },
      mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up("md")]: {
          paddingRight: 0
        }
      },
      text:{
        color: 'white'
      },
      button: {
        margin: theme.spacing.unit,
      },
  });