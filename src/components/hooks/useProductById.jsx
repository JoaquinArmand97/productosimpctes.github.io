import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; 

export const useProductById = (id) => {
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log("Fetching product with ID:", id); // Para ver si está recibiendo el ID correctamente
                
                const productItem = doc(db, "products", id);
                const snapshot = await getDoc(productItem);
                
                if (snapshot.exists()) {
                    console.log("Product found:", snapshot.data()); // Para verificar si los datos están disponibles
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.log("No such document!");
                    setProduct(null); // Establecer como null si no existe
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setProduct(null); // Manejar el error
            } finally {
                setLoading(false);
                console.log("Loading finished.");
            }
        };

        // Solo intentar obtener el producto si el ID está definido y no es vacío
        if (id) {
            fetchProduct();
        } else {
            console.log("No ID provided.");
            setLoading(false); // Si no hay ID, terminar la carga
        }
    }, [id]);

    return { product, loading };
};
