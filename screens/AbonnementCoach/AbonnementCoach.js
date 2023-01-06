import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Radio,
  Heading,
  Box,
  Text,
  Modal,
  Button,
  Container,
  Stack,
  FormControl,
} from "native-base";
import { abonnementStyles } from "./styles";
import { Formik } from "formik";
import { AuthService } from "../../services/coachAuth";
import CoachService from "../../services/coach.services";

export default function AbonnementCoach() {
  const [open, setOpen] = useState(false);
  const [abonnement, setAbonnement] = useState("");

  useEffect(() => {
    // const f = async () => {
    //   await
    //   );
    // };
    // f();
    AuthService.getCurrentUser()
      .then((u) => {
        console.log("data", u);
        setAbonnement(u.abonnement);
      })
      .catch((e) => console.log("error", e));
  }, [abonnement]);
  console.log(abonnement);

  return (
    <NativeBaseProvider>
      <Box style={abonnementStyles.header}>
        <Heading size="xl" mb="4">
          <Text>Abonnement</Text>
        </Heading>
        <Text fontSize="xl">Choisissez l'un des trois plans disponibles</Text>
      </Box>
      <Container style={abonnementStyles.container}>
        <Formik
          initialValues={{ abonnement: abonnement }}
          onSubmit={(values) => {
            console.log(values);
            CoachService.updateAbonnement(values.abonnement)
              .then((e) => console.log(e))
              .catch((e) => console.log(e));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Stack my="10">
              <FormControl isRequired>
                <Radio.Group
                  name="abonnement"
                  accessibilityLabel="favorite colorscheme"
                  onChange={handleChange("abonnement")}
                >
                  <Radio
                    colorScheme="emerald"
                    name="abonnement"
                    value="Free"
                    my={1}
                  >
                    Free
                  </Radio>
                  <Text style={abonnementStyles.radioSubText}>
                    Le plan FREE vous permet d'avoir 3 joueurs inscris
                    gratuitement.
                  </Text>
                  <Radio
                    colorScheme="emerald"
                    name="abonnement"
                    value="Basic"
                    my={1}
                  >
                    Basic
                  </Radio>
                  <Text style={abonnementStyles.radioSubText}>
                    Le plan BASIC vous permet d'avoir 10 joueurs inscris.
                  </Text>
                  <Radio
                    colorScheme="emerald"
                    name="abonnement"
                    value="Premium"
                    my={1}
                  >
                    Premium
                  </Radio>
                  <Text style={abonnementStyles.radioSubText}>
                    Le plan PREMIUM n'impose aucun limite au nombre de joueurs
                    inscris.
                  </Text>
                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                  >
                    Confirmer
                  </Button>
                </Radio.Group>
              </FormControl>
              {/* <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                safeAreaTop={true}
              >
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Confirmation de l'abonnement</Modal.Header>
                  <Modal.Body>
                    <Text>
                      Veuillez confirmer votre choix pour le nouveau plan
                      adopté!
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        onPress={() => {
                          handleSubmit();
                          setOpen(false);
                        }}
                      >
                        Confirmer
                      </Button>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setAbonnement(3);
                          setOpen(false);
                        }}
                      >
                        Annuler
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal> */}
            </Stack>
          )}
        </Formik>
      </Container>
    </NativeBaseProvider>
  );
}
