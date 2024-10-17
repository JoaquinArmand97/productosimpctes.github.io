import { Flex, Text } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cardwidget = () => {
    const { cartState } = useContext(CartContext);

    

    const qtyTotalItem = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Link to="/Checkout">
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"50px"}>
            <GrCart size={25} />
            <Text fontSize={"1.5rem"}>{qtyTotalItem}</Text>
        </Flex>
        </Link>
    );
};

export default Cardwidget;
