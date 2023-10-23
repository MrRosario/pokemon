import React, { useState } from "react";
import InputNumber from "components/InputNumber";
import InputText from "components/InputEdit";
import HorizontalBox from "components/HorizontalBox";
import DropdownPage from "components/Dropdown";
import BigButton from "components/BigButton";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styled";

const CreateForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <S.FormContainer>
      <InputText
        className="nome"
        label="NOME"
        type="text"
        placeholder="Nome"
        name="Nome"
        {...register("nome", { required: true })}
      />
      <InputNumber
        className="hp"
        label="HP"
        placeholder="HP"
        {...register("hp", { required: true })}
      />
      <InputNumber
        className="peso"
        label="PESO"
        placeholder="peso"
        suffix="Kg"
        {...register("peso", { required: true })}
      />
      <InputNumber
        className="altura"
        label="ALTURA"
        placeholder="altura"
        suffix="Cm"
        {...register("altura", { required: true })}
      />

      <HorizontalBox title="TIPO">
        <S.InnerFormWrapper>
          <DropdownPage {...register("peso", { required: true })} />
        </S.InnerFormWrapper>
      </HorizontalBox>

      <HorizontalBox title="HABILIDADES">
        <S.InnerFormWrapper>
          <InputText
            className="habilidade1"
            type="text"
            placeholder="Habilidade 1"
            name="habilidade1"
            {...register("habilidade1", { required: true })}
          />
          <InputText
            className="habilidade2"
            type="text"
            placeholder="Habilidade 2"
            name="habilidade2"
            {...register("habilidade2", { required: true })}
          />
          <InputText
            className="habilidade3"
            type="text"
            placeholder="Habilidade 3"
            name="habilidade3"
            {...register("habilidade3", { required: true })}
          />
          <InputText
            className="habilidade4"
            type="text"
            placeholder="Habilidade 4"
            name="habilidade4"
            {...register("habilidade4", { required: true })}
          />
        </S.InnerFormWrapper>
      </HorizontalBox>

      <HorizontalBox title="ESTATÍSTICAS">
        <S.InnerFormWrapper>
          <InputNumber
            label="DEFESA"
            placeholder="00"
            {...register("defesa", { required: true })}
          />
          <InputNumber
            label="ATAQUE"
            placeholder="00"
            {...register("ataque", { required: true })}
          />
          <InputNumber
            label="DEFESA ESPECIAL"
            placeholder="00"
            {...register("defesa-especial", { required: true })}
          />
          <InputNumber
            label="ATAQUE ESPECIAL"
            placeholder="00"
            {...register("ataque-especial", { required: true })}
          />
          <InputNumber
            label="VELOCIDADE"
            placeholder="00"
            {...register("velocidade", { required: true })}
          />
        </S.InnerFormWrapper>
      </HorizontalBox>

      <BigButton
        onClik={handleSubmit(onSubmit)}
        label="CRIAR POKEMON"
        // isDisabled={isFormValid}
      />
    </S.FormContainer>
  );
};

export default CreateForm;
