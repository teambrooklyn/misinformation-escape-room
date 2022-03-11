const styles = (theme) => ({
    title: {
        textAlign:"center"
    },
    component: {
        marginTop:"20px",
        textAlign: "center",
        maxWidth:"1100px",
        '@media (min-width: 1100px)' : {
            minWidth: '1100px'
        }
    },
    table: {
        marginBottom:"20px",
        maxHeight:"400px",
        overflow:"auto"
    },
    selectContainer: {
        marginTop:"15px",
        marginBottom:"15px"
    },
    svg: {
        width: "100%",
        height: "100%"
    },
    gridItem: {
        paddingLeft: "10px",
        paddingRight: "10px",
        minHeight: "400px"
    },
});
  
export default styles;