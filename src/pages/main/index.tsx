import ListItem from "@/components/ListItem";
import { useGetLogsQuery } from "@/redux/apis";
import { LogListContainer, Subtitle, Text, Title } from "@/styles/main";
import { Button } from "@/styles/shared";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { Spin, message } from "antd";
import { useEffect } from "react";

export default function Main() {
  const { isLoading, data, error, isError } = useGetLogsQuery({});

  useEffect(() => {
    if (isError) {
      message.error(getErrorMessage(error));
    }
  }, [isError]);

  return (
    <Spin spinning={isLoading}>
      <div className="d-flex flex-column" style={{ width: "50vw" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Text>Relógio de ponto</Text>
          </div>
          <div className="d-flex flex-column">
            <Text className="text-nowrap">Usuário teste</Text>
            <Subtitle className="align-self-end">Usuário</Subtitle>
          </div>
        </div>
        <div className="mt-3">
          <Title>0h 00m</Title>
          <Subtitle>Horas de hoje</Subtitle>
        </div>
        <Button className="btn mt-3">Hora de entrada</Button>
        <Text className="mb-2 mt-3">Dias anteriores</Text>
        <LogListContainer>
          {Array.from({ length: 25 }).map((_, i) => (
            <ListItem date="17/04/2023" time="7h30m" />
          ))}
        </LogListContainer>
      </div>
    </Spin>
  );
}
