import { StyleSheet } from 'react-native';

const ongoingTaskStyles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  noTasksText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
  },
  taskBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.3,
    borderColor: '#A66CFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    backgroundColor: 'transparent',
  },
  taskTextBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  taskTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskAbout: {
    color: '#fff',
    fontSize: 12,
  },

  // ✅ Action icon container
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // some spacing between ✏️ and 🗑️
  },
  deleteIcon: {
    fontSize: 18,
    color: '#A66CFF',
  },
  editIcon: {
    width:20,
    height:20,
    marginRight:10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  toggleIcon: {
    fontSize: 28,
    color: '#fff',
  },
 
});

export default ongoingTaskStyles;
