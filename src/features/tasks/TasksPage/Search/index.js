import { Input } from "../../Input"
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";


export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const ReplaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        ReplaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Input
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
    )
};