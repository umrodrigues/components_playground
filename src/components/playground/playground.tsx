'use client'
import { useState } from "react";
import Alert from "@/components/alert/alert";
import Button from "@/components/button/button";
import styles from './Playground.module.scss'
import Datagrid from "../datagrid/datagrid";
import DataGridTest from "../datagridtest/datagridtest";

export default function Playground() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSucess] = useState(false);
  const [showAlertInfo, setShowAlertInfo] = useState(false);

  return (
    <>
    <div className={styles.playground}>
      <h2>Playground Components</h2>




      <h3>Alerts</h3>
        <div className={styles.alerts}>
      <Button
        text="Alert de erro"
        variant="primary"
        onClick={() => setShowAlert(true)}
      />

      {showAlert && <Alert message="Operação realizada com sucesso!" type="error" />}

      <Button
        text="Alert de sucesso"
        variant="secondary"
        onClick={() => setShowAlertSucess(true)}
        />

        {showAlertSuccess && <Alert message="Há receitas que ferem as restrições desta turma, considere realizar alterações nas receitas em destaque!" type="success" />}

        <Button
        text="Alert de info"
        variant="primary"
        onClick={() => setShowAlertInfo(true)}
        />

        {showAlertInfo && <Alert message="Há receitas que ferem as restrições desta turma, considere realizar alterações nas receitas em destaque!" type="info" />}
        </div>

        <h3>dropdown</h3>

        {/* <Dropdown/> */}

        <h3>Datagrid test</h3>
        <DataGridTest/>


        <h3>Datagrid com lib mui/x-data-gri</h3>

        <Datagrid/>


      


        <h3>Modal</h3>
        
        </div>
      
    </>
  );
}
