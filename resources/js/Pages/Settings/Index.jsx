import {
    useBreakpoints,
    VerticalStack,
    HorizontalGrid,
    HorizontalStack,
    Box,
    Text,
    AlphaCard,
    Divider,
    Button,
    Frame,
} from "@shopify/polaris";
import SettingsLayout from "@/Layouts/SettingsLayout";
import CheckboxComponent from "@/Components/CheckboxComponent";
import AddModeratorForm from "@/Components/AddModeratorForm";
import ModeratorsTable from "@/Components/ModeratorsTable";
import Pagination from "@/Components/Pagination";

const Settings = ({ moderators }) => {
    const { smUp } = useBreakpoints();

    return (
        <Frame>
            <VerticalStack gap={{ xs: "8", sm: "4" }}>
                <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 4, sm: 0 }}
                        paddingInlineEnd={{ xs: 4, sm: 0 }}
                    >
                        <VerticalStack gap="4">
                            <Text as="h3" variant="headingMd">
                                Test project
                            </Text>
                        </VerticalStack>
                    </Box>
                    <AlphaCard roundedAbove="sm">
                        <HorizontalStack
                            align="space-between"
                            blockAlign="center"
                        >
                            <Text>Test project is currentry enabled</Text>
                            <Button>Disable</Button>
                        </HorizontalStack>
                    </AlphaCard>
                </HorizontalGrid>
                {smUp ? <Divider /> : null}
                <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 4, sm: 0 }}
                        paddingInlineEnd={{ xs: 4, sm: 0 }}
                    >
                        <VerticalStack gap="4">
                            <Text as="h3" variant="headingMd">
                                Moderators
                            </Text>
                        </VerticalStack>
                    </Box>
                    <AlphaCard roundedAbove="sm">
                        <AddModeratorForm />
                        <ModeratorsTable moderators={moderators.data} />
                        <Pagination pages={moderators.links} />
                    </AlphaCard>
                </HorizontalGrid>
                {smUp ? <Divider /> : null}
                <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 4, sm: 0 }}
                        paddingInlineEnd={{ xs: 4, sm: 0 }}
                    >
                        <VerticalStack gap="4">
                            <Text as="h3" variant="headingMd">
                                Global Settings
                            </Text>
                        </VerticalStack>
                    </Box>
                    <AlphaCard roundedAbove="sm">
                        <CheckboxComponent label="Moderation is enabled" />
                        <Box paddingInlineStart="8">
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Provident fugiat quaerat
                                adipisci ab accusamus ipsa, fuga odit culpa
                                cumque? Explicabo iure accusamus doloribus quis
                                quod. Amet omnis voluptatum neque fugit quidem
                                dolores maxime officiis quis quod. Consequatur
                                adipisci voluptate sunt tempora voluptates, id
                                quibusdam dignissimos magni laborum quae dolore
                                quam?
                            </Text>
                        </Box>
                    </AlphaCard>
                </HorizontalGrid>
            </VerticalStack>
        </Frame>
    );
};

Settings.layout = (page) => <SettingsLayout children={page} title="Settings" />;

export default Settings;
