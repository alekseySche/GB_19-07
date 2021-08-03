import React from "react";
import { usePrev } from "../../utils";

export const Message = ({ text, author }) => (
<div>
    {author}: {text}
</div>
);