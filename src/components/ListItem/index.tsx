import { IListItem } from "@/interfaces/list_item.interface";
import { ListItemContainer, Text } from "@/styles/main";

export default function ListItem(props: IListItem) {
  const { date, time } = props;

  return (
    <ListItemContainer>
      <div className="d-flex justify-content-between">
        <Text className="date">{date}</Text>
        <Text className="time">{time}</Text>
      </div>
    </ListItemContainer>
  );
}
