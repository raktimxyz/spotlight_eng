import PropTypes             from "prop-types";
import { StyleCategoryName } from "@/css_module/Styles";
import Link                  from "next/link";

export default function CategoryName({ name, route = null}) {
    return (
        <StyleCategoryName>
            <Link href={route}>
                <h4>
                    {name}
                </h4>
            </Link>
        </StyleCategoryName>
    )
}

CategoryName.propTypes = {
    name  : PropTypes.string.isRequired,
    route : PropTypes.string
}