/**
=========================================================
* Uploader Dashboard 2 - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/joy/Card";
import Icon from "@mui/joy/Icon";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";

// Uploader Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Uploader Dashboard 2 examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
    const { columns, rows } = data();
    const [menu, setMenu] = useState(null);

    const openMenu = ({ currentTarget }) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = ( <
        Menu id = "simple-menu"
        anchorEl = { menu }
        anchorOrigin = {
            {
                vertical: "top",
                horizontal: "left",
            }
        }
        transformOrigin = {
            {
                vertical: "top",
                horizontal: "right",
            }
        }
        open = { Boolean(menu) }
        onClose = { closeMenu } >
        <
        MenuItem onClick = { closeMenu } > Action < /MenuItem> <
        MenuItem onClick = { closeMenu } > Another action < /MenuItem> <
        MenuItem onClick = { closeMenu } > Something
        else </MenuItem> < /
        Menu >
    );

    return ( <
        Card >
        <
        MDBox display = "flex"
        justifyContent = "space-between"
        alignItems = "center"
        p = { 3 } >
        <
        MDBox >
        <
        MDTypography variant = "h6"
        gutterBottom >
        Projects <
        /MDTypography> <
        MDBox display = "flex"
        alignItems = "center"
        lineHeight = { 0 } >
        <
        Icon sx = {
            {
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
            }
        } >
        done <
        /Icon> <
        MDTypography variant = "button"
        fontWeight = "regular"
        color = "text" >
        &
        nbsp; < strong > 30 done < /strong> this month < /
        MDTypography > <
        /MDBox> < /
        MDBox > <
        MDBox color = "text"
        px = { 2 } >
        <
        Icon sx = {
            { cursor: "pointer", fontWeight: "bold" }
        }
        fontSize = "small"
        onClick = { openMenu } >
        more_vert <
        /Icon> < /
        MDBox > { renderMenu } <
        /MDBox> <
        MDBox >
        <
        DataTable table = {
            { columns, rows }
        }
        showTotalEntries = { false }
        isSorted = { false }
        noEndBorder entriesPerPage = { false }
        /> < /
        MDBox > <
        /Card>
    );
}

export default Projects;