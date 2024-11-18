import React from 'react'
import { CustomTypo } from './common/CustomTypo'

const SkillComp = ({title}) => {
  return (
    <CustomTypo
          variant="h6"
          sx={{
            backgroundColor: "#374151",
            textAlign: "center",
            paddingX: "20px",
            paddingY: "6px",
            borderRadius: "20px",
            marginTop: 2,
            width: "10em",
            fontWeight:'200'
          }}
          color="white"

        >
          {title}
        </CustomTypo>
  )
}

export default SkillComp