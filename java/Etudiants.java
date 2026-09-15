public class Etudiants {
    public String nom;
    public int numero;
    public String filiere;


    public Etudiants(String nom, int numero, String filiere) {
        this.nom = nom;
        this.numero = numero;
        this.filiere = filiere;
    }

    public String getNom() {
        return nom;
    }
    public int getNumero() {
        return numero;
    }
    public String getFiliere() {
        return filiere;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }
    public void setFiliere(String filiere) {
        this.filiere = filiere;
    }

    public String toString() {
        return "Etudiant{" +
                "nom='" + nom + '\'' +
                ", numero=" + numero +
                ", filiere='" + filiere + '\'' +
                '}';
    }

    public static void afficherEtudiants(Etudiants[] etudiants) {
        for (Etudiants etudiant : etudiants) {
            System.out.println(etudiant);
        }
    }

    public static void main(String[] args) {
        Etudiants etudiant1 = new Etudiants("Alice", 12345, "Informatique");
        Etudiants etudiant2 = new Etudiants("Bob", 67890, "Mathematiques");

        System.out.println(etudiant1);
        System.out.println(etudiant2);
    }
}
