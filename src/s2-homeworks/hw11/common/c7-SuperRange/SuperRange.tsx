import React from "react"
import {Slider, SliderProps} from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: "success.light",
                "& .MuiSlider-thumb": {
                    color: "white",
                    border: "1px solid #81c784",
                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                        boxShadow: "0 0 0 8px rgb(129, 199, 132, 0.5)",
                    },
                },
                "& .MuiSlider-rail": {
                    opacity: 0.5,
                    backgroundColor: "#8B8B8B",
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
