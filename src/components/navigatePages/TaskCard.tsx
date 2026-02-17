import { View, Text, StyleSheet, Modal, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'

type Props = {
  task: string
}

// Days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const TaskCard = (props: Props) => {
  const { task } = props
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const handleSelectDay = (day: string) => {
    setSelectedDay(day)
    setModalVisible(false)
  }

  return (
    <>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task}</Text>
        {/* Assign button – now a Pressable */}
        <Pressable
          style={styles.assignButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.assignButtonText}>
            {selectedDay ? `(${selectedDay})` : 'Assign'}
          </Text>
        </Pressable>
      </View>

      {/* Modal for day selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a day</Text>
            <FlatList
              data={daysOfWeek}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.radioItem}
                  onPress={() => handleSelectDay(item)}
                >
                  <View style={styles.radioCircle}>
                    {selectedDay === item && <View style={styles.radioSelected} />}
                  </View>
                  <Text style={styles.radioLabel}>{item}</Text>
                </Pressable>
              )}
            />
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default TaskCard

const styles = StyleSheet.create({
  taskItem: {
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center", // vertically center children
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  assignButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    marginLeft: 10,
  },
  assignButtonText: {
    fontSize: 14,
    color: '#333',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'stretch',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
