import { Flex , Text} from "@chakra-ui/react"
import { GrCart } from "react-icons/gr";


const Cardwidget = () => {
    return (
            <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"50px"}> 
                <GrCart size={25}/>
                <Text fontSize={"1.5rem"}>0</Text>
            </Flex>
    )
}

export default Cardwidget;