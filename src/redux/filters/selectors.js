import {createSelector} from "@reduxjs/toolkit";
import {selectContacts} from "../contacts/selectors";
import {filterValue} from "./slice";

export const selectFilteredContacts = createSelector([selectContacts, filterValue], (contacts, filter) => {
    return contacts.filter(contact => {
        const input = `${contact.name ?? ""} ${contact.number ?? ""}`;
        return input.toLowerCase().includes(filter.toLowerCase());
    });
});
