import React from "react"
import { Box } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
import { IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Routes, Route } from "react-router-dom";
import UploadFilmForm from "../../components/UploadFilmForm";
const MovieManage =() =>  {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    
        return (
            <Box display="flex" justifyContent="space-between" p={2}>
                <Box
                    width = {500}
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Movie Search" ></InputBase>
                    <IconButton type="button">
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box >
                    <Routes>
                        <Route path="moviemanage/addmovieform" element={<UploadFilmForm/>} />
                        </Routes>
                    <Button
                        href= "moviemanage/addmovieform"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.blueAccent[200],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <AddIcon sx={{ mr: "10px" }} />
                        Create new movie
                    </Button>
                </Box>
            </Box>
        )
    }

export default MovieManage;