import React from "react";
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import 'react-native-gesture-handler';
import Footer from "../components/footer";
import Note from "../components/note";
import NoteInput from "../components/noteInput";
import Sidebar from "../components/sidebar";

import { useNotes } from "../context/NotesContext";

const { height } = Dimensions.get('window');

export default function Index() {

  const {
    notes,
    setNotes,
    deletedNotes,
    setDeletedNotes,
    archivedNotes,
    setArchivedNotes
  } = useNotes();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sidebarShown, setSiderbarShown] = React.useState(false);
  const [noteInputShown, setNoteInputShown] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const [color, setColor] = React.useState("white");
  const [deletedShown, setDeletedShown] = React.useState(false);
  const [archiveShown, setArchiveShown] = React.useState(false);
  const [flexCol, setFlexCol] = React.useState(true);
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    fetch("https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setNotes(data)
      })
  }, [])

  React.useEffect(() => {
    if (!deletedShown) return;

    const timer = setTimeout(() => {
      setDeletedShown(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [deletedShown]);

  React.useEffect(() => {
    if (!archiveShown) return;

    const timer = setTimeout(() => {
      setArchiveShown(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [archiveShown]);

  function deleteNote(id) {

    fetch(`https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log("Deleted:", data)
        setNotes(prev => prev.filter(note => note.id !== id));
      })
    const deleted = notes.find(note => note.id === id)
    setNotes(prev => prev.filter(note => note.id !== id));
    setDeletedNotes(prev => [...prev, deleted])
    setDeletedShown(true)
  }


  function archiveNote(id) {
    fetch(`https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/${id}/archive`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_archived: true,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setNotes(prev => prev.filter(note => note.id !== id));
        setArchivedNotes(prev => [...prev, data])
        setArchiveShown(true)
      })
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {noteInputShown && <NoteInput fixed={fixed} setFixed={setFixed} color={color} setColor={setColor} notes={notes} setNotes={setNotes} title={title} setTitle={setTitle} description={description} setDescription={setDescription} setNoteInputShown={setNoteInputShown} />}
      <Sidebar page="home" sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
      <View style={styles.container}>
        <View style={styles.noteInput}>
          <View style={styles.noteInputLeft}>
            <Pressable onPress={() => setSiderbarShown(prev => !prev)}>
              <Image source={require("../../assets/images/menu-icon.png")}></Image>
            </Pressable>
            <TextInput value={searchInput} onChangeText={setSearchInput} style={styles.noteInputText} placeholder="Notlarınızda arayın"></TextInput>
          </View>
          <View style={styles.noteInputRight}>
            <Pressable onPress={() => setFlexCol(prev => !prev)}>
              <Image source={require("../../assets/images/grid.png")}></Image>
            </Pressable>
            <View style={styles.profile}>
              <Text style={styles.profileText}>M</Text>
            </View>
          </View>
        </View>
        {notes.length === 0 && <View style={styles.infoContainer}>
          <Image style={styles.image} source={require("../../assets/images/bulb.png")}></Image>
          <Text style={styles.title}>Eklediğiniz notlar burada görünür</Text>
        </View>}
        <ScrollView contentContainerStyle={[styles.notesContainer, !flexCol && styles.rowContainer]} style={styles.scrollContainer}>
          <View style={[styles.notesContainer, !flexCol && styles.rowContainer]}>
            {notes
              .filter((item) => {
                return (
                  item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                  item.description.toLowerCase().includes(searchInput.toLowerCase())
                );
              })
              .map((item) => (
                <View style={styles.pinnedContainer} key={item.id}>
                  {item.fixed && <Text style={styles.pinnedInfo}>Sabitlenen</Text>}
                  <Note
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    setNotes={setNotes}
                    notes={notes}
                    id={item.id}
                    color={item.color}
                    setDeletedNotes={setDeletedNotes}
                    deletedNotes={deletedNotes}
                    archivedNotes={archivedNotes}
                    setArchivedNotes={setArchivedNotes}
                    setNoteInputShown={setNoteInputShown}
                    setDeletedShown={setDeletedShown}
                    setArchiveShown={setArchiveShown}
                    archiveNote={archiveNote}
                    deleteNote={deleteNote}
                    flexCol={flexCol}
                    fixed={item.fixed}
                    page="home"
                  />
                </View>
              ))}
          </View>
        </ScrollView>
        {deletedShown && <View style={styles.deletedInfo}>
          <Text style={styles.deletedInfoText}>Not çöp kutusuna taşındı</Text>
        </View>}
        {archiveShown && <View style={styles.deletedInfo}>
          <Text style={styles.deletedInfoText}>Not arşivlendi</Text>
        </View>}
      </View>
      <Footer setNoteInputShown={setNoteInputShown} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1
  },
  title: {
    fontSize: 18,
    color: "#5F6368",
    textAlign: "center",
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: height * 0.1
  },
  image: {
    margin: 20
  },
  noteInput: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    width: "95%",
    borderRadius: 8,
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  noteInputLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1
  },
  noteInputRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  noteInputText: {
    color: "#202124",
    fontSize: 15,
    width: "100%",
    paddingRight: 40
  },
  profile: {
    backgroundColor: "#43a0a8",
    width: 30,
    height: 30,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  profileText: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  scrollContainer: {
    width: "100%",
  },
  notesContainer: {
    display: "flex",
    width: "100%",
    gap: 8,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30
  },
  rowContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30
  },
  deletedInfo: {
    position: "absolute",
    bottom: 100,
    width: "95%",
    backgroundColor: "#212121",
    padding: 10,
    borderRadius: 6
  },
  deletedInfoText: {
    color: "white",
    fontWeight: "500",
    fontSize: 13
  },
  pinnedContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  pinnedInfo: {
    fontSize: 12,
    color: "#808080",
    fontWeight: "600",


  }
})


