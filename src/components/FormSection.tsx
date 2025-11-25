import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const FormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    sofreu_acidente: "",
    tipo_acidente: "",
    sequelas: "",
    afastamento_inss: "",
    corpo_afetado: "",
    documentos: "",
    ocupacao: "",
    solicitacao_anterior: "",
    autorizacao: false,
    fonte: "Landing Page Auxílio-Acidente"
  });

  const [showNoAccidentMsg, setShowNoAccidentMsg] = useState(false);
  const [showNoSequelaMsg, setShowNoSequelaMsg] = useState(false);
  const [showConditionalFields, setShowConditionalFields] = useState(false);

  const handleAcidenteChange = (value: string) => {
    setFormData({ ...formData, sofreu_acidente: value });
    if (value === "nao") {
      setShowNoAccidentMsg(true);
      setShowConditionalFields(false);
    } else {
      setShowNoAccidentMsg(false);
      setShowConditionalFields(true);
    }
  };

  const handleSequelaChange = (value: string) => {
    setFormData({ ...formData, sequelas: value });
    if (value === "nao") {
      setShowNoSequelaMsg(true);
    } else {
      setShowNoSequelaMsg(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação: não permite envio se não sofreu acidente ou não tem sequelas
    if (formData.sofreu_acidente === "nao") {
      toast({
        title: "Formulário não pode ser enviado",
        description: "O Auxílio-Acidente é destinado a quem sofreu acidente.",
        variant: "destructive"
      });
      return;
    }

    if (formData.sequelas === "nao") {
      toast({
        title: "Formulário não pode ser enviado",
        description: "O Auxílio-Acidente é destinado a quem ficou com sequelas permanentes.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.autorizacao) {
      toast({
        title: "Autorização necessária",
        description: "Por favor, autorize o contato via WhatsApp.",
        variant: "destructive"
      });
      return;
    }

    // Simulação de envio para o email especificado
    console.log("Formulário enviado para: formulario-auxilio-acidente@portaloito.in");
    console.log("Dados:", formData);

    toast({
      title: "Análise solicitada com sucesso!",
      description: "Nossa equipe entrará em contato pelo WhatsApp em breve.",
    });

    // Reset form
    setFormData({
      nome: "",
      telefone: "",
      cidade: "",
      sofreu_acidente: "",
      tipo_acidente: "",
      sequelas: "",
      afastamento_inss: "",
      corpo_afetado: "",
      documentos: "",
      ocupacao: "",
      solicitacao_anterior: "",
      autorizacao: false,
      fonte: "Landing Page Auxílio-Acidente"
    });
    setShowConditionalFields(false);
  };

  return (
    <section id="form-section" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl text-primary">
              👉 Verifique gratuitamente se você tem direito ao Auxílio-Acidente do INSS
            </CardTitle>
            <CardDescription className="text-base mt-4">
              Responda algumas perguntas rápidas para saber se você pode receber uma indenização mensal vitalícia do INSS.<br />
              <strong>(Leva menos de 1 minuto e é 100% gratuito.)</strong>
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dados Básicos */}
              <div className="space-y-4 pb-6 border-b">
                <h3 className="text-lg font-bold text-primary">🔹 Seus Dados</h3>
                
                <div>
                  <Label htmlFor="nome">Nome completo <span className="text-destructive">*</span></Label>
                  <Input 
                    id="nome" 
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefone">Telefone com WhatsApp <span className="text-destructive">*</span></Label>
                  <Input 
                    id="telefone" 
                    type="tel" 
                    placeholder="(11) 99999-9999"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="cidade">Cidade e Estado <span className="text-destructive">*</span></Label>
                  <Input 
                    id="cidade" 
                    placeholder="Ex: São Paulo, SP"
                    required
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  />
                </div>
              </div>

              {/* Triagem do Direito */}
              <div className="space-y-6 pb-6 border-b">
                <h3 className="text-lg font-bold text-primary">🔹 Triagem de Direito</h3>
                
                <div>
                  <Label>Você sofreu algum acidente nos últimos 5 anos? <span className="text-destructive">*</span></Label>
                  <RadioGroup 
                    value={formData.sofreu_acidente}
                    onValueChange={handleAcidenteChange}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="acidente_sim" />
                      <Label htmlFor="acidente_sim" className="font-normal cursor-pointer">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="acidente_nao" />
                      <Label htmlFor="acidente_nao" className="font-normal cursor-pointer">Não</Label>
                    </div>
                  </RadioGroup>
                  
                  {showNoAccidentMsg && (
                    <div className="mt-4 bg-primary-light border-l-4 border-primary p-4 rounded">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-primary">
                          ℹ️ O Auxílio-Acidente é destinado a quem sofreu acidente e ficou com sequelas permanentes. Se você não sofreu acidente, este benefício não se aplica ao seu caso.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {showConditionalFields && (
                  <>
                    <div>
                      <Label>O acidente ocorreu: <span className="text-destructive">*</span></Label>
                      <RadioGroup 
                        value={formData.tipo_acidente}
                        onValueChange={(value) => setFormData({ ...formData, tipo_acidente: value })}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="trabalho" id="acidente_trabalho" />
                          <Label htmlFor="acidente_trabalho" className="font-normal cursor-pointer">No trabalho</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fora" id="acidente_fora" />
                          <Label htmlFor="acidente_fora" className="font-normal cursor-pointer">Fora do trabalho</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="trajeto" id="acidente_trajeto" />
                          <Label htmlFor="acidente_trajeto" className="font-normal cursor-pointer">Não tenho certeza / foi no trajeto</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Você ficou com alguma sequela permanente (mesmo que leve)? <span className="text-destructive">*</span></Label>
                      <RadioGroup 
                        value={formData.sequelas}
                        onValueChange={handleSequelaChange}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim_total" id="sequela_sim_total" />
                          <Label htmlFor="sequela_sim_total" className="font-normal cursor-pointer">Sim, fiquei com limitação ou redução de movimento</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim_leve" id="sequela_sim_leve" />
                          <Label htmlFor="sequela_sim_leve" className="font-normal cursor-pointer">Sim, mas leve (ainda sinto dor ou limitação)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="sequela_nao" />
                          <Label htmlFor="sequela_nao" className="font-normal cursor-pointer">Não fiquei com sequelas</Label>
                        </div>
                      </RadioGroup>
                      
                      {showNoSequelaMsg && (
                        <div className="mt-4 bg-primary-light border-l-4 border-primary p-4 rounded">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-primary">
                              ℹ️ O Auxílio-Acidente é destinado a pessoas que ficaram com sequelas permanentes. Se você não tem sequelas, este benefício não se aplica. Mas se a situação mudar, entre em contato conosco!
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {formData.sequelas && formData.sequelas !== "nao" && (
                      <>
                        <div>
                          <Label>Você precisou de afastamento pelo INSS (Auxílio-Doença) após o acidente? <span className="text-destructive">*</span></Label>
                          <RadioGroup 
                            value={formData.afastamento_inss}
                            onValueChange={(value) => setFormData({ ...formData, afastamento_inss: value })}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sim" id="afastamento_sim" />
                              <Label htmlFor="afastamento_sim" className="font-normal cursor-pointer">Sim</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="nao" id="afastamento_nao" />
                              <Label htmlFor="afastamento_nao" className="font-normal cursor-pointer">Não</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="recebendo" id="afastamento_recebendo" />
                              <Label htmlFor="afastamento_recebendo" className="font-normal cursor-pointer">Estou recebendo ainda</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="corpo_afetado">Qual parte do corpo foi afetada? <span className="text-destructive">*</span></Label>
                          <Input 
                            id="corpo_afetado" 
                            placeholder="Ex: mão direita, joelho esquerdo, coluna"
                            value={formData.corpo_afetado}
                            onChange={(e) => setFormData({ ...formData, corpo_afetado: e.target.value })}
                          />
                        </div>

                        <div>
                          <Label>Você tem laudos, exames ou documentos médicos do acidente? <span className="text-destructive">*</span></Label>
                          <RadioGroup 
                            value={formData.documentos}
                            onValueChange={(value) => setFormData({ ...formData, documentos: value })}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sim" id="doc_sim" />
                              <Label htmlFor="doc_sim" className="font-normal cursor-pointer">Sim, tenho tudo</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="alguns" id="doc_alguns" />
                              <Label htmlFor="doc_alguns" className="font-normal cursor-pointer">Tenho alguns</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="nao" id="doc_nao" />
                              <Label htmlFor="doc_nao" className="font-normal cursor-pointer">Ainda não</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label>Qual é a sua ocupação atual? <span className="text-destructive">*</span></Label>
                          <RadioGroup 
                            value={formData.ocupacao}
                            onValueChange={(value) => setFormData({ ...formData, ocupacao: value })}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="empregado" id="ocupacao_empregado" />
                              <Label htmlFor="ocupacao_empregado" className="font-normal cursor-pointer">Empregado com carteira assinada</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="autonomo" id="ocupacao_autonomo" />
                              <Label htmlFor="ocupacao_autonomo" className="font-normal cursor-pointer">Autônomo / informal</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="desempregado" id="ocupacao_desempregado" />
                              <Label htmlFor="ocupacao_desempregado" className="font-normal cursor-pointer">Desempregado</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="aposentado" id="ocupacao_aposentado" />
                              <Label htmlFor="ocupacao_aposentado" className="font-normal cursor-pointer">Aposentado</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Qualificação */}
              {showConditionalFields && formData.sequelas && formData.sequelas !== "nao" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-primary">🔹 Qualificação</h3>
                  
                  <div>
                    <Label>Você já solicitou o Auxílio-Acidente antes? <span className="text-destructive">*</span></Label>
                    <RadioGroup 
                      value={formData.solicitacao_anterior}
                      onValueChange={(value) => setFormData({ ...formData, solicitacao_anterior: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negado" id="solicitacao_negado" />
                        <Label htmlFor="solicitacao_negado" className="font-normal cursor-pointer">Sim, foi negado</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="primeira" id="solicitacao_primeira" />
                        <Label htmlFor="solicitacao_primeira" className="font-normal cursor-pointer">Não, é a primeira vez</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incerto" id="solicitacao_incerto" />
                        <Label htmlFor="solicitacao_incerto" className="font-normal cursor-pointer">Não tenho certeza</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="autorizacao" 
                      checked={formData.autorizacao}
                      onCheckedChange={(checked) => setFormData({ ...formData, autorizacao: checked as boolean })}
                    />
                    <Label htmlFor="autorizacao" className="font-normal cursor-pointer leading-tight">
                      Sim, entendo que a Hall Assessoria entrará em contato por WhatsApp para confirmar meus dados e avaliar meu direito. Li e concordo com a{" "}
                      <a 
                        href="/politica-de-privacidade" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Política de Privacidade
                      </a>
                      . <span className="text-destructive">*</span>
                    </Label>
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={!showConditionalFields || formData.sequelas === "nao"}
              >
                Enviar Análise Gratuita
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
