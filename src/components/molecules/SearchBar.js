import React from 'react'
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <Input placeholder="Kërko për qytet, zonë ose lloj prone..." />
            <Button text="Kërko" />
        </div>
    );
}
