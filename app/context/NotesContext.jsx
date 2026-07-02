import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);

    return (
        <NotesContext.Provider
            value={{
                notes,
                setNotes,
                deletedNotes,
                setDeletedNotes,
                archivedNotes,
                setArchivedNotes
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    return useContext(NotesContext);
}